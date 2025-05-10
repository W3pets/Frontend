'use client';

import styles from '@/components/pages/auth/styles.module.scss';
import Button from '@/components/shared/Button/Button';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import { SignUpSchema } from '@/model/DTO/user/auth';
import { useFormik } from 'formik';
import { InferType } from 'yup';
import MultiChecked, {
  MultiCheckItem,
} from '@/components/shared/Inputs/MultiChecked/MultiChecked';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RegisterPage() {
  const handleSubmit = async (values: InferType<typeof SignUpSchema>) => {};
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '';

  const initVals: InferType<typeof SignUpSchema> = {
    phone: '',
    username: '',
    confirmPassword: '',
    email: '',
    password: '',
    redirectUrl,
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: SignUpSchema,
    onSubmit: handleSubmit,
  });

  const passwordTests = useMemo(
    () => [
      {
        id: 5,
        selected: formik.values.password.length >= 6,
        name: '6+ characters',
      },
      {
        id: 0,
        selected: /[A-Z]/.test(formik.values.password),
        name: 'One uppercase letter',
      },
      {
        id: 1,
        selected: /[a-z]/.test(formik.values.password),
        name: 'One uppercase letter',
      },
      {
        id: 2,
        selected: /[0-9]/.test(formik.values.password),
        name: 'One number',
      },
      {
        id: 3,
        selected: /[#?!@$%^&*-]/.test(formik.values.password),
        name: 'One Special Character',
      },
      {
        id: 4,
        selected: formik.values.password === formik.values.confirmPassword,
        name: 'Passwords match',
      },
    ],
    [formik.values]
  ) as MultiCheckItem[];

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <TextInput
        label="Full Name"
        placeholder="Enter your full name"
        error={formik.touched.username ? formik.errors.username : ''}
        props={formik.getFieldProps('username')}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={formik.touched.email ? formik.errors.email : ''}
        props={formik.getFieldProps('email')}
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        error={formik.touched.password ? formik.errors.password : ''}
        props={formik.getFieldProps('password')}
      />
      <TextInput
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        error={
          formik.touched.confirmPassword ? formik.errors.confirmPassword : ''
        }
        props={formik.getFieldProps('confirmPassword')}
      />
      <div className={styles.required}>
        <div className={styles.title}>Password Requirements:</div>
        <MultiChecked
          items={passwordTests}
          className={styles.inputs}
          type="radio"
        />
      </div>
      <Button
        className={styles.submit_btn}
        type="submit"
        isLoading={formik.isSubmitting}
      >
        Sign Up
      </Button>
    </form>
  );
}
