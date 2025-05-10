'use client';

import { ForgotInitSchema } from '@/model/DTO/user/auth';
import { useFormik } from 'formik';
import styles from '@/components/pages/auth/styles.module.scss';
import { InferType } from 'yup';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import Button from '@/components/shared/Button/Button';
import { IoIosSend } from 'react-icons/io';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { useState } from 'react';

function page() {
  const [isSent, setSent] = useState(false);
  const handleSubmit = async (values: InferType<typeof ForgotInitSchema>) => {
    setSent(!isSent);
  };

  const initVal: InferType<typeof ForgotInitSchema> = {
    email: '',
  };

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: ForgotInitSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {!isSent && (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            error={formik.touched.email ? formik.errors.email : ''}
            props={formik.getFieldProps('email')}
          />
          <Button
            className={styles.submit_btn}
            type="submit"
            isLoading={formik.isSubmitting}
          >
            <IoIosSend fontSize={20} />
            Send Reset Link
          </Button>
        </form>
      )}
      {isSent && (
        <div className={styles.forgot_email_sent}>
          <div className={styles.icon}>
            <div className={styles.background} />
            <IoCheckmarkDoneCircleOutline fontSize={38} />
          </div>
          <div className={styles.main_info}>Check Your Email</div>
          <div className={styles.info}>
            We've sent a password reset link to {formik.values.email}
          </div>
        </div>
      )}
    </>
  );
}

export default page;
