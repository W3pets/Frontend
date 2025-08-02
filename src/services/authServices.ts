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

  @utils.setBgMsg([StatusCode.Success], true)
  public async resetPassword(values: InferType<typeof PasswordResetSchema>) {
    const { confirmPassword, ...rest } = values;
    const res = <AuthenticatedRes>await authHttp.post('/reset-password', rest);
    return res;
  }

  public async getUserAttempt() {
    try {
      const mockUser = {
        id: 123,
        email: 'test@example.com',
        name: 'Test User',
        username: 'testuser',
        role: 'seller',
        isSeller: true,
        isVerified: true,
        token: 'mocked-token',
      };

      // Inject mock token into all Axios instances
      reqHandler.handleBearerToken(mockUser.token);

      // Save token to localStorage (optional, helps with refresh)
      localStorage.setItem('accessToken', mockUser.token);

      // Fake login state
      store.dispatch(authSlice.actions.loggedIn(mockUser));
    } catch (error) {
      console.error('Mock login failed', error);
    }
  }
}

export const authServices = new AuthServices();
