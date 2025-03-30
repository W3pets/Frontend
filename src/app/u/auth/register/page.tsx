'use client';

import PhoneInput from '@/components/shared/Inputs/PhoneInput/PhoneInput';
import styles from '../../../../components/pages/auth/styles.module.scss';
import Button from '@/components/shared/Button/Button';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import { SignUpSchema } from '@/model/DTO/user/auth';
import { useFormik } from 'formik';
import { InferType } from 'yup';

export default function RegisterPage() {
  const handleSubmit = async (values: InferType<typeof SignUpSchema>) => {};

  const initVals: InferType<typeof SignUpSchema> = {
    phone: '',
    fullName: '',
    confirmPassword: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: SignUpSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <TextInput
        label="Full Name"
        placeholder="Enter your full name"
        error={formik.touched.fullName ? formik.errors.fullName : ''}
        props={formik.getFieldProps('fullName')}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={formik.touched.email ? formik.errors.email : ''}
        props={formik.getFieldProps('email')}
      />
      <PhoneInput
        value={formik.values.phone}
        onChange={formik.setFieldValue}
        error={formik.touched.phone ? formik.errors.phone : ''}
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
      <Button
        className={styles.submit_btn}
        type="submit"
        isLoading={formik.isSubmitting}
      >
        Sign Up
      </Button>
    </>
  );
}
