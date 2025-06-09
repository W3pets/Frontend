'use client';

import React, { useLayoutEffect } from 'react';
import styles from './styles.module.scss';
import { NewSellerSchema } from '@/model/DTO/seller';
import { useFormik } from 'formik';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import Button from '@/components/shared/Button/Button';
import PhoneInput from '@/components/shared/Inputs/PhoneInput/PhoneInput';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';
import LocationInput from '@/components/shared/Inputs/LocationInput/LocationInput';
import { Paths } from '@/model/types/global';
import { OnBoardingSteps, SellerPaths } from '@/model/types/seller';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { useRouter } from 'next/navigation';
import newSellerSlice from '@/lib/store/slices/seller/newSeller';

function Profile({ showHeader = true }: { showHeader?: boolean }) {
  const router = useRouter();

  const user = useAppSelector((state) => state.user.auth.user);
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((s) => s.seller.newSeller.profile);

  const handleSubmit = async () => {
    router.push(
      `${Paths.Sellers}${SellerPaths.SellerRegister}?progress=${OnBoardingSteps.ID}`
    );
  };

  const formik = useFormik({
    initialValues: profileData,
    validationSchema: NewSellerSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  useLayoutEffect(() => {
    dispatch(
      newSellerSlice.actions.setProfile({
        ...formik.values,
        isValid: formik.isValid,
      })
    );
  }, [formik.values, formik.isValid]);

  return (
    <div className={styles.content}>
      {showHeader && (
        <div className={styles.header}>
          <div className={styles.title}>Welcome, {user?.email} !</div>
          <div className={styles.slogan}>
            We're excited to learn more about you.
          </div>
        </div>
      )}

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextInput
          label="What name would you like to give your business?"
          placeholder="Business Name"
          error={
            formik.touched.business_name ? formik.errors.business_name : ''
          }
          props={formik.getFieldProps('business_name')}
        />
        <PhoneInput
          name="contact_phone"
          label="What's your primary contact phone number?"
          value={formik.values.contact_phone}
          onChange={formik.setFieldValue}
          error={formik.errors.contact_phone}
        />
        <TextInput
          label="Address/Estate"
          placeholder="Enter your address or estate"
          error={
            formik.touched.business_address
              ? formik.errors.business_address
              : ''
          }
          props={formik.getFieldProps('business_address')}
        />
        <TextInput
          label="City"
          placeholder="City"
          error={formik.touched.city ? formik.errors.city : ''}
          props={formik.getFieldProps('city')}
        />
        <TextInput
          label="State"
          placeholder="State"
          error={formik.touched.state ? formik.errors.state : ''}
          props={formik.getFieldProps('state')}
        />
        <LocationInput
          name="location_coords"
          label="Pin your exact location on the map"
          value={formik.values.location_coords}
          onChange={formik.setFieldValue}
          isRequired={false}
          error={
            formik.errors.location_coords?.lat ||
            formik.errors.location_coords?.lng
          }
        />
        <TextInput
          type="textarea"
          label="What sets you apart as a seller?"
          placeholder="As a seller..."
          maxLength={240}
          error={formik.errors.seller_uniqueness}
          props={formik.getFieldProps('seller_uniqueness')}
        />
        <FileInput
          label="Photo builds trust, add a face to your brand!"
          error={formik.errors.brand_image}
          min={1}
          max={1}
          onChange={formik.setFieldValue}
          defaultFiles={formik.values?.brand_image}
          name="brand_image"
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
