import { UserMini } from '@/model/DTO/user/auth';

export enum AuthPaths {
  Login = '/login',
  Register = '/register',
  ForgotPassInit = '/forgot_init',
  VerifyAlert = '/verification_notification',
}

export type AuthStore = {
  isAuth: boolean;
  user: UserMini | null;
  justRegistered: string;
};
