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
import { redirect, useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import authSlice from '@/lib/store/slices/user/auth';
import { Paths } from '@/model/types/global';
import { AuthPaths } from '@/model/types/user/auth';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const redirectUrl = searchParams.get('redirect') || '';
  const justRegistered = useAppSelector((s) => s.user.auth.justRegistered);

  const setJustRegistered = authSlice.actions.setJustRegistered;

  const initVals: InferType<typeof SignUpSchema> = {
    phone: '',
    username: '',
    confirmPassword: '',
    email: '',
    password: '',
    redirectUrl,
  };

  const handleSubmit = async (values: InferType<typeof SignUpSchema>) => {
    dispatch(setJustRegistered(values.email));
    redirect(`${Paths.Auth}${AuthPaths.VerifyAlert}`);
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: SignUpSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
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
    <>
      {!justRegistered && (
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
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : ''
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
      )}
    </>
  );
}
