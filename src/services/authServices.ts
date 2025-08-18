import { InferType } from 'yup';
import {
  AuthenticatedRes,
  ForgotInitSchema,
  PasswordResetSchema,
  MessageMini,
  SignInSchema,
  SignUpSchema,
} from '@/model/DTO/user/auth';
import { utils } from '@/lib/utils/base';
import { authHttp, reqHandler } from './config/http';
import { StatusCode } from '@/model/types/global';
import { store } from '@/lib/store';
import authSlice from '@/lib/store/slices/user/auth';

class AuthServices {
  @utils.setBgMsg([], false)
  public async signup(values: InferType<typeof SignUpSchema>) {
    const { confirmPassword, ...rest } = values;
    const res = <MessageMini>await authHttp.post('/signup', rest);
    return res;
  }

  @utils.setBgMsg([StatusCode.Success], true)
  public async signIn(values: InferType<typeof SignInSchema>) {
    const res = <AuthenticatedRes>await authHttp.post('/login', values);
    return res;
  }

  @utils.setBgMsg([StatusCode.Success])
  public async forgotPass(values: InferType<typeof ForgotInitSchema>) {
    const res = <MessageMini>await authHttp.post('/forgot-password', values);
    return res;
  }
  // 34Ag#$kj
  @utils.setBgMsg([StatusCode.Success], true)
  public async resetPassword(values: InferType<typeof PasswordResetSchema>) {
    const { confirmPassword, ...rest } = values;
    const res = <AuthenticatedRes>await authHttp.post('/reset-password', rest);
    return res;
  }

  public async getUserAttempt() {
    try {
      const refreshResponse = await reqHandler.baseInstance.post(
        '/api/auth/refresh-token'
      );
      const authRes = refreshResponse.data;
      // Add access token to instances header
      reqHandler.handleBearerToken(authRes.accessToken);
      store.dispatch(authSlice.actions.loggedIn(authRes.user));
    } catch (error) {}
  }
}

export const authServices = new AuthServices();
