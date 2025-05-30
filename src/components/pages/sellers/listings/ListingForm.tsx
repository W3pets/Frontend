import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import { ListingSchema } from '@/model/DTO/seller';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';
import SelectInput from '@/components/shared/Inputs/SelectInput/SelectInput';
import { dummyCategory } from '../../home/MainCategories/MainCategories';
import Button from '@/components/shared/Button/Button';
import newSellerSlice from '@/lib/store/slices/seller/newSeller';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { sellerServices } from '@/services/sellerServices';
import { InferType } from 'yup';

function ListingForm() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((s) => s.seller.newSeller);
  const categories = dummyCategory.map((c) => c.name);
  const genders = ['Male', 'Female', 'Male and Female'];

  const handleSubmit = async (values: InferType<typeof ListingSchema>) => {
    const res = await sellerServices.onboard({ ...data, listing: values });
    if (res) {
    }
  };

  const formik = useFormik({
    initialValues: data.listing,
    validationSchema: ListingSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  });

  useEffect(() => {
    dispatch(newSellerSlice.actions.setListing(formik.values));
  }, [formik.values, formik.isValid]);

  return (
    <form className={styles.form_listing}>
      <TextInput
        label="Product Title"
        placeholder="e.g., 'Healthy Rhode Island Red Chickens'"
        error={formik.errors.product_title}
        props={formik.getFieldProps('product_title')}
      />
      <SelectInput
        selected={categories.findIndex(
          (c) => c === formik.values.product_category
        )}
        onChange={formik.setFieldValue}
        error={formik.errors.product_category}
        name="product_category"
        label="Product Category"
        options={categories}
      />
      <TextInput
        label="Product Breed"
        placeholder="e.g., 'Rhode Island Red'"
        error={formik.errors.product_brand}
        props={formik.getFieldProps('product_brand')}
      />
      <TextInput
        label="Age (months)"
        type="number"
        placeholder="e.g., 6"
        error={formik.errors.age}
        props={formik.getFieldProps('age')}
      />
      <TextInput
        label="Weight (kg)"
        type="number"
        placeholder="e.g., 6"
        error={formik.errors.weight}
        props={formik.getFieldProps('weight')}
      />
      <TextInput
        label="Quantity"
        type="number"
        placeholder="e.g., 6"
        error={formik.errors.quantity}
        props={formik.getFieldProps('quantity')}
      />
      <TextInput
        label="Price (₦)"
        type="number"
        placeholder="e.g., 5000"
        error={formik.errors.age}
        props={formik.getFieldProps('price')}
      />
      <SelectInput
        selected={genders.findIndex((g) => g === formik.values.gender)}
        onChange={formik.setFieldValue}
        error={formik.errors.gender}
        name="gender"
        label="Gender"
        options={genders}
      />
      <FileInput
        label="Add A video of you product"
        placeHolder="Size of video should not exceed 20mb"
        error={formik.errors.product_video}
        type="video"
        min={0}
        max={1}
        onChange={formik.setFieldValue}
        defaultFiles={formik.values.product_video}
        name="product_video"
      />
      <FileInput
        label="Photo builds trust, add a face to your brand!"
        error={formik.errors.product_photos}
        min={1}
        max={1}
        onChange={formik.setFieldValue}
        defaultFiles={formik.values.product_photos}
        name="product_photos"
      />
      <Button
        className={styles.submit_btn}
        type="submit"
        isDisabled={!formik.isValid}
        isLoading={formik.isSubmitting}
      >
        Create Listing
      </Button>
    </form>
  );
}

export default ListingForm;
