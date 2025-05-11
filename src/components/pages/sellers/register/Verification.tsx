import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { MdOutlineShield } from 'react-icons/md';
import { NewSellerSchema2 } from '@/model/DTO/seller';
import { useFormik } from 'formik';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';
import Button from '@/components/shared/Button/Button';
import { FaCheck } from 'react-icons/fa6';
import uniqid from 'uniqid';
import newSellerSlice, {
  initialState,
} from '@/lib/store/slices/seller/newSeller';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { Paths } from '@/model/types/global';
import { OnBoardingSteps, SellerPaths } from '@/model/types/seller';
import { useRouter } from 'next/navigation';

const strengths = [
  'Builds trust with potential buyers',
  'Helps prevent fraud and scams',
  'Ensures compliance with local regulations',
];

function Verification() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isProfileValid = useAppSelector(
    (s) => s.seller.newSeller.profile.isValid
  );

  const handleSubmit = async () => {
    router.push(
      `${Paths.Sellers}${SellerPaths.SellerRegister}?progress=${OnBoardingSteps.Listing}`
    );
  };

  const formik = useFormik({
    initialValues: initialState.id,
    validationSchema: NewSellerSchema2,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  useEffect(() => {
    dispatch(newSellerSlice.actions.setId(formik.values));
  }, [formik.isValid]);

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
          error={formik.errors.id}
          min={1}
          max={1}
          onChange={formik.setFieldValue}
          defaultFiles={formik.values.id}
          name="id"
        />

        <div className={styles.btn_row}>
          <Button
            onClick={handleSubmit}
            className={styles.btn}
            isDisabled={!isProfileValid}
          >
            Skip
          </Button>
          <Button
            className={styles.btn}
            type="submit"
            isDisabled={!formik.isValid}
            isLoading={formik.isSubmitting}
          >
            Submit for Verification
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Verification;
