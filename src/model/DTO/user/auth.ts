import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^(?:[A-Za-z]+)(?:\s[A-Za-z]+){1,2}$/, 'Provide your 2 or 3 Names')
    .max(100, 'Too Long!')
    .required('First name is Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().matches(/\d{3}\s\d{3}\s\d{4}/, 'Invalid Phone number'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{6,}$/,
      'Password does not match requirements'
    ),
  redirectUrl: Yup.string(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('No password provided.'),
});

export const ForgotInitSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const ForgotResetSchema = Yup.object().shape({
  token: Yup.string(),
  newPassword: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{6,}$/,
      'Password does not match requirements'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type AuthenticatedRes = {
  user: UserMini;
  accessToken: string;
} & MessageMini;

export type MessageMini = {
  message: string;
};

export type UserMini = {
  id: number;
  email: string;
  username: string;
  role: string;
  // isSeller: boolean;
  // isVerified: boolean;
};

export type JwtToken = {
  accessToken: string;
};
