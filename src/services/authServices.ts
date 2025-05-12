import { InferType } from 'yup';
import {
  AuthenticatedRes,
  ForgotInitSchema,
  ForgotResetSchema,
  MessageMini,
  SignInSchema,
  SignUpSchema,
} from '@/model/DTO/user/auth';
import { utils } from '@/lib/utils/base';
import { authHttp, reqHandler } from './config/http';
import { StatusCode } from '@/model/types/global';

class AuthServices {
  @utils.setBgMsg<MessageMini>([StatusCode.Success])
  public async signup(values: InferType<typeof SignUpSchema>) {
    const { confirmPassword, ...rest } = values;
    const res = <MessageMini>await authHttp.post('/signup', rest);
    return res;
  }

  @utils.setBgMsg<AuthenticatedRes>([StatusCode.Success])
  public async signIn(values: InferType<typeof SignInSchema>) {
    const res = <AuthenticatedRes>await authHttp.post('/login', values);
    reqHandler.handleBearerToken(res.accessToken);
    return res.user;
  }

  @utils.setBgMsg([StatusCode.Success])
  public async forgotPass(values: InferType<typeof ForgotInitSchema>) {
    const res = <MessageMini>await authHttp.post('/forgot-password', values);
    return res;
  }

  @utils.setBgMsg([StatusCode.Success])
  public async resetPassword(values: InferType<typeof ForgotResetSchema>) {
    const { confirmPassword, ...rest } = values;
    const res = <AuthenticatedRes>await authHttp.post('/reset-password', rest);
    reqHandler.handleBearerToken(res.accessToken);
    return res.user;
  }
}

export const authServices = new AuthServices();
