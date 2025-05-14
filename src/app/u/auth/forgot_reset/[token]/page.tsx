'use client';

import { ForgotResetSchema } from '@/model/DTO/user/auth';
import { useFormik } from 'formik';
import styles from '@/components/pages/auth/styles.module.scss';
import { InferType } from 'yup';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import Button from '@/components/shared/Button/Button';
import { useMemo, use } from 'react';
import MultiChecked, {
  MultiCheckItem,
} from '@/components/shared/Inputs/MultiChecked/MultiChecked';
import { authServices } from '@/services/authServices';
import authSlice from '@/lib/store/slices/user/auth';
import { useAppDispatch } from '@/lib/store/hooks';

function page(props0: { params: Promise<{ token: string }> }) {
  const params = use(props0.params);
  const dispatch = useAppDispatch();
  const { token } = params;

  const handleSubmit = async (values: InferType<typeof ForgotResetSchema>) => {
    const res = await authServices.resetPassword(values);
    if (res) {
      dispatch(authSlice.actions.loggedIn(res.user));
    }
  };

  const initVals: InferType<typeof ForgotResetSchema> = {
    newPassword: '',
    token,
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: ForgotResetSchema,
    onSubmit: handleSubmit,
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
    <>
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
          Reset Password
        </Button>
      </form>
    </>
  );
}

export default page;
