import React from 'react';
import styles from './styles.module.scss';
import { NewSellerSchema } from '@/model/DTO/seller';
import { useFormik } from 'formik';
import { InferType } from 'yup';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import Button from '@/components/shared/Button/Button';
import PhoneInput from '@/components/shared/Inputs/PhoneInput/PhoneInput';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';

function Profile() {
  const handleSubmit = async (values: InferType<typeof NewSellerSchema>) => {};

  const initVals: InferType<typeof NewSellerSchema> = {
    name: '',
    phone: '',
    image: [],
    sellerValue: '',
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: NewSellerSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>Welcome, Abraham Kuforiji !</div>
        <div className={styles.slogan}>
          We're excited to learn more about you.
        </div>
      </div>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextInput
          label="What name would you like to give your business?"
          placeholder="Business Name"
          error={formik.touched.name ? formik.errors.name : ''}
          props={formik.getFieldProps('name')}
        />
        <PhoneInput
          label="What's your primary contact phone number?"
          value={formik.values.phone}
          onChange={formik.setFieldValue}
          error={formik.errors.phone}
        />
        <TextInput
          type="textarea"
          label="What sets you apart as a seller?"
          placeholder="As a seller..."
          maxLength={240}
          error={formik.errors.sellerValue}
          props={formik.getFieldProps('sellerValue')}
        />
        <FileInput
          label="Photo builds trust, add a face to your brand!"
          error={formik.errors.image}
          min={1}
          max={1}
          onChange={formik.setFieldValue}
          defaultFiles={initVals?.image}
          name="image"
        />
        <Button
          className={styles.submit_btn}
          type="submit"
          isDisabled={!formik.isValid}
          isLoading={formik.isSubmitting}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default Profile;
