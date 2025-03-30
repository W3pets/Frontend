'use client';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import { useFormik } from 'formik';
import { SignInDTO, SignInSchema } from '@/model/DTO/user/auth';
import Button from '@/components/shared/Button/Button';
import styles from '@/components/pages/auth/styles.module.scss';

export default function LoginPage() {
  const handleSubmit = async (values: SignInDTO) => {};

  const initValS: SignInDTO = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initValS,
    validationSchema: SignInSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
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

      <Button className={styles.submit_btn} type="submit" isLoading>
        Sign In
      </Button>
    </>
  );
}
