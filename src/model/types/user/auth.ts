export enum AuthPaths {
  Login = '/login',
  Register = '/register',
  ForgotPassInit = '/forgot_init',
}

export type AuthStore = {
  isAuth: boolean;
  user: UserMini | null;
};

export type UserMini = {
  email: string;
  username: string;
  isSeller: boolean;
  isVerified: boolean;
};
