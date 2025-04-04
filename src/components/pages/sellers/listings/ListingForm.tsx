import React from 'react';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import { ListingSchema } from '@/model/DTO/seller';
import { InferType } from 'yup';
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import FileInput from '@/components/shared/Inputs/FileInput/FileInput';
import SelectInput from '@/components/shared/Inputs/SelectInput/SelectInput';
import { dummyCategory } from '../../home/MainCategories/MainCategories';
import Button from '@/components/shared/Button/Button';

function ListingForm() {
  const handleSubmit = async (values: InferType<typeof ListingSchema>) => {};

  const categories = dummyCategory.map((c) => c.name);
  const genders = ['Male', 'Female', 'Male and Female'];

  const initVals: InferType<typeof ListingSchema> = {
    weight: 28,
    quantity: 1,
    gender: '',
    age: 1,
    price: 5000,
    title: '',
    category: '',
    breed: '',
    images: [],
    video: [],
  };

  const formik = useFormik({
    initialValues: initVals,
    validationSchema: ListingSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form className={styles.form_listing}>
      <TextInput
        label="Product Title"
        placeholder="e.g., 'Healthy Rhode Island Red Chickens'"
        error={formik.errors.title}
        props={formik.getFieldProps('title')}
      />
      <SelectInput
        selected={categories.findIndex((c) => c === formik.values.category)}
        onChange={formik.setFieldValue}
        error={formik.errors.category}
        name="category"
        label="Product Category"
        options={categories}
      />
      <TextInput
        label="Product Breed"
        placeholder="e.g., 'Rhode Island Red'"
        error={formik.errors.breed}
        props={formik.getFieldProps('breed')}
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
        error={formik.errors.video}
        type="video"
        min={0}
        max={1}
        onChange={formik.setFieldValue}
        defaultFiles={initVals?.video}
        name="video"
      />
      <FileInput
        label="Photo builds trust, add a face to your brand!"
        error={formik.errors.images}
        min={1}
        max={1}
        onChange={formik.setFieldValue}
        defaultFiles={initVals?.images}
        name="images"
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
