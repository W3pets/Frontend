import React from 'react';
import styles from './styles.module.scss';
import { MdOutlineShield } from 'react-icons/md';
import { NewSellerSchema2 } from '@/model/DTO/seller';
import { InferType } from 'yup';
import { useFormik } from 'formik';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';
import Button from '@/components/shared/Button/Button';
import { FaCheck } from 'react-icons/fa6';
import uniqid from 'uniqid';

const strengths = [
  'Builds trust with potential buyers',
  'Helps prevent fraud and scams',
  'Ensures compliance with local regulations',
];

function Verification() {
  const handleSubmit = async (values: InferType<typeof NewSellerSchema2>) => {};

  const initVals: InferType<typeof NewSellerSchema2> = {
    image: [],
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: NewSellerSchema2,
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <MdOutlineShield />
        <div className={styles.title}>Verify Your Identity</div>
        <div className={styles.slogan}>
          To ensure trust and safety in our marketplace, we need to verify your
          identity.
        </div>
      </div>
      <div className={styles.strengths}>
        <div className={styles.header}>Why we verify sellers:</div>
        <div className={styles.over_lay} />
        {strengths.map((s) => (
          <div key={uniqid()} className={styles.strength}>
            <FaCheck />
            <span>{s}</span>
          </div>
        ))}
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <FileInput
          label="Upload a government-issued ID document(Nin,ID Card,e.t.c)"
          placeHolder="National ID, Driver's License, or Passport"
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
          Submit for Verification
        </Button>
      </form>
    </div>
  );
}

export default Verification;
