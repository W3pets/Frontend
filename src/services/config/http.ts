import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import consts from '@/model/consts';
import { Paths, StatusCode } from '@/model/types/global';
import { store } from '@/lib/store';
import { JwtToken } from '@/model/DTO/user/auth';
import { APIErrorDTO2, APIRes, APIStatusDTO } from '@/model/DTO/global';
import authSlice from '@/lib/store/slices/user/auth';

// Define types for your headers (optional, but recommended)
interface CustomHeaders {
  [key: string]: string;
}

class ReqHandler {
  // variables
  public readonly baseAPIURL = consts.global.url.api;

  private instances: AxiosInstance[] = [];

  public readonly baseURL = consts.global.url.app;
  private readonly timeout = 1000 * 30; // 30s timeout
  // variables for refreshing tokens
  private refreshPromise: Promise<AxiosResponse<JwtToken>> | null = null;
  private isRefreshing = false;
  private readonly baseInstance: AxiosInstance;

  constructor() {
    this.baseInstance = axios.create({
      baseURL: this.baseAPIURL,
      withCredentials: true, // Important for sending cookies
    });
  }

  private serviceUnavalilable(): APIRes<any> {
    return {
      status: {
        code: StatusCode.Network,
        message: 'Service Unavailable – Please try again later',
        success: false,
      },
    };
  }

  private handleTimout(): APIRes<any> {
    // handle timeout
    return {
      status: {
        code: StatusCode.Timeout,
        message:
          'Your request took too long to process. Please check your connection and try again.',
        success: false,
      },
    };
  }

  private async handleRefresh(
    originalRequest: InternalAxiosRequestConfig<any> & { _retry: Boolean },
    instance: AxiosInstance,
    message: string,
    status: number
  ): Promise<APIRes<any>> {
    if (originalRequest && status === 401 && !originalRequest._retry) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;

        if (!this.refreshPromise) {
          // Only create the promise once
          this.refreshPromise = this.baseInstance.post(
            '/api/auth/refresh-token'
          );
        }

        try {
          const refreshResponse = await this.refreshPromise;
          const authRes = refreshResponse.data;

          // Add access token to instances header
          this.handleBearerToken(authRes.accessToken);

          // Retry the original request
          originalRequest._retry = true; // Mark the request as retried
          const initRes = <AxiosResponse<APIRes<JwtToken>>>(
            await instance(originalRequest)
          );

          this.isRefreshing = false;
          this.refreshPromise = null; // Reset the promise

          return initRes.data;
        } catch (refreshError) {
          // reset auth state
          store.dispatch(authSlice.actions.resetState());

          this.isRefreshing = false;
          this.refreshPromise = null; // Reset the promise
        }
      } else {
        // If a refresh request is already in progress, wait for it to complete
        await this.refreshPromise;

        try {
          // Retry the original request
          originalRequest._retry = true; // Mark the request as retried
          const initRes = <AxiosResponse<APIRes<JwtToken>>>(
            await instance(originalRequest)
          );
          return initRes.data;
        } catch (error) {}
      }
    }
    // Handle refresh token error / error on instance error/ originalRequest._retry
    return {
      status: {
        success: false,
        message,
        code: status,
      },
    }; // Reject the promise
  }

  private async handleErrorasync(
    config: InternalAxiosRequestConfig<any> & {
      _retry: Boolean;
    },
    instance: AxiosInstance,
    useRefresh: boolean,
    prevRes: APIStatusDTO
  ) {
    let newRes: APIRes<any> | null = null;

    if (prevRes) {
      //   handle refresh token
      if (useRefresh) {
        newRes = await this.handleRefresh(
          config,
          instance,
          prevRes.message,
          prevRes.code
        );
      } else {
        newRes = { status: { ...prevRes } };
      }
    }

    return newRes as APIRes<any>;
  }

  public handleBearerToken(token = '') {
    this.instances.forEach((instance) => {
      instance.interceptors.request.use(
        (reqConfig) => {
          if (token) {
            reqConfig.headers.Authorization = `Bearer ${token}`;
          } else {
            reqConfig.headers.Authorization = undefined;
          }
          return reqConfig;
        },
        (error) => Promise.reject(error)
      );
    });
  }

  // Function to create an Axios instance with common config
  public createHttpClient = (
    subUrl: string,
    useRefresh = true,
    customHeaders: CustomHeaders = {}
  ): AxiosInstance => {
    const config: AxiosRequestConfig = {
      baseURL: `${this.baseAPIURL}${subUrl}`,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json', // Default content type
        ...customHeaders,
      },
      withCredentials: true, // If you need cookies
    };

    const instance = axios.create(config);

    // add to instances
    this.instances.push(instance);

    // Response interceptor (example: handle 401 errors for token refresh)
    instance.interceptors.response.use(
      async (response) => {
        // Check the status code here
        const data = { ...response.data } as APIRes<any>;
        const code = data.status.code;
        data.status.code =
          code >= StatusCode.Success && code <= 299 ? StatusCode.Success : code;

        if (data.status.success) {
          return data as any; // Proceed with the successful response
        }

        // handle error
        const res = await this.handleErrorasync(
          response.config as InternalAxiosRequestConfig<any> & {
            _retry: Boolean;
          },
          instance,
          useRefresh,
          data.status
        );

        return res as any;
      },
      async (error: AxiosError) => {
        // timeout error
        if (error.code === 'ECONNABORTED') {
          return Promise.resolve(this.handleTimout());
          // netwrok error
        } else if (
          error.code === 'ERR_NETWORK' ||
          error.code === 'ECONNREFUSED'
        ) {
          return Promise.resolve(this.serviceUnavalilable());
        }

        const resError = error.response?.data as APIErrorDTO2;
        const code = resError.statusCode;
        resError.statusCode =
          code >= StatusCode.Success && code <= 299 ? StatusCode.Success : code;

        const prevStatus: APIStatusDTO = {
          message: resError.message,
          code: resError.statusCode,
          success: false,
        };

        const res = await this.handleErrorasync(
          error.config as InternalAxiosRequestConfig<any> & {
            _retry: Boolean;
          },
          instance,
          useRefresh,
          prevStatus
        );

        return Promise.resolve(res);
      }
    );
    return instance;
  };
}

// Create your Axios instances with different base URLs and headers
export const reqHandler = new ReqHandler();
export const authHttp = reqHandler.createHttpClient(Paths.Auth);

reqHandler.handleBearerToken();
