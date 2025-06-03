'use client';

import styles from '@/components/pages/sellers/dashboard/settings.module.scss';
import Button from '@/components/shared/Button/Button';
import MultiChecked, {
  MultiCheckItem,
} from '@/components/shared/Inputs/MultiChecked/MultiChecked';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import { PasswordResetSchema } from '@/model/DTO/user/auth';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { InferType } from 'yup';

function page() {
  const handleSubmit = async (
    values: InferType<typeof PasswordResetSchema>
  ) => {};

  const initVals: InferType<typeof PasswordResetSchema> = {
    confirmPassword: '',
    newPassword: '',
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: PasswordResetSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  const passwordTests = useMemo(
    () => [
      {
        id: 5,
        selected: formik.values.newPassword.length >= 6,
        name: '6+ characters',
      },
      {
        id: 0,
        selected: /[A-Z]/.test(formik.values.newPassword),
        name: 'One uppercase letter',
      },
      {
        id: 1,
        selected: /[a-z]/.test(formik.values.newPassword),
        name: 'One uppercase letter',
      },
      {
        id: 2,
        selected: /[0-9]/.test(formik.values.newPassword),
        name: 'One number',
      },
      {
        id: 3,
        selected: /[#?!@$%^&*-]/.test(formik.values.newPassword),
        name: 'One Special Character',
      },
      {
        id: 4,
        selected: formik.values.newPassword === formik.values.confirmPassword,
        name: 'Passwords match',
      },
    ],
    [formik.values]
  ) as MultiCheckItem[];

  return (
    <div className={styles.sec_page}>
      <div className={styles.sec_header}>Change Password</div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextInput
          type="password"
          label="New Password"
          placeholder="Enter your password"
          error={formik.touched.newPassword ? formik.errors.newPassword : ''}
          props={formik.getFieldProps('newPassword')}
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
          Save Changes
        </Button>
      </form>
    </div>
  );
}

export default page;
