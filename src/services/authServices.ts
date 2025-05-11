import { authHttp } from '@/lib/httpClient/config';
import { StatusCode } from '@/models/types/global.enum';
import { InferType } from 'yup';
import {
  ForgotInitSchema,
  ForgotResetSchema,
  SignInSchema,
  SignUpSchema,
} from '@/model/DTO/user/auth';
import { utils } from '@/lib/utils/base';

class AuthServices {
  @utils.setBgMsg([], OtpToken)
  public async signup(values: InferType<typeof SignUpSchema>) {
    const res = <OtpToken>await authHttp.post('/signup/1', values);
    return res;
  }

  @utils.setBgMsg()
  public async signIn(values: InferType<typeof SignInSchema>) {
    const res = <JwtTokens>await authHttp.post('/signin', values);
    return res;
  }

  @utils.setBgMsg()
  public async forgotPass(values: InferType<typeof ForgotInitSchema>) {
    const res = <OtpToken>await authHttp.post('/pr', values);

    // do not return otp when emails work
    return res;
  }

  @utils.setBgMsg()
  public async resetPassword(values: InferType<typeof ForgotResetSchema>) {
    const res = <JwtTokens>await authHttp.post('/resetp', values);
    return res;
  }

  @utils.setBgMsg([StatusCode.Timeout, StatusCode.Network])
  public async refresh() {
    const res = <JwtTokens>await authHttp.post('/signinrt');
    return res;
  }
}

export const authServices = new AuthServices();
