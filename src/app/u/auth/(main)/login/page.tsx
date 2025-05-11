'use client';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import { useFormik } from 'formik';
import { SignInSchema } from '@/model/DTO/user/auth';
import Button from '@/components/shared/Button/Button';
import styles from '@/components/pages/auth/styles.module.scss';
import { InferType } from 'yup';
import Link from 'next/link';
import { AuthPaths } from '@/model/types/user/auth';
import { Paths } from '@/model/types/global';

export default function LoginPage() {
  const handleSubmit = async (values: InferType<typeof SignInSchema>) => {};

  const initValS: InferType<typeof SignInSchema> = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initValS,
    validationSchema: SignInSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <TextInput
        label="Email"
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

      <div className={styles.forgot_pass}>
        <Link href={`${Paths.Auth}/${AuthPaths.ForgotPassInit}`}>
          Forgot password?
        </Link>
      </div>

      <Button
        className={styles.submit_btn}
        type="submit"
        isLoading={formik.isSubmitting}
      >
        Sign In
      </Button>
    </form>
  );
}
