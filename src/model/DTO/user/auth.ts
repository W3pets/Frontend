import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^(?:[A-Za-z]+)(?:\s[A-Za-z]+){1,2}$/, 'Provide your 2 or 3 Names')
    .max(100, 'Too Long!')
    .required('First name is Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().matches(/\d{3}\s\d{3}\s\d{4}/, 'Invalid Phone number'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /[a-zA-Z#?!@$%^&*-]/,
      'Password can only contain Latin and Limited Special Characters'
    ),
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

export const ForgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});
