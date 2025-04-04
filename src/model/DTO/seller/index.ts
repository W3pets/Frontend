import helpers from '@/helpers';
import consts from '@/model/consts';
import * as Yup from 'yup';

export const NewSellerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(50, 'Business name too long')
    .required('Business name is Required'),
  phone: Yup.string()
    .matches(/\d{3}\s\d{3}\s\d{4}/, 'Invalid Phone number')
    .required('Phone number required'),
  sellerValue: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(240, 'Comment too long')
    .required('Required'),
  image: helpers.getFileShema(1),
});

export const NewSellerSchema2 = Yup.object().shape({
  image: helpers.getFileShema(1),
});

export const ListingSchema = Yup.object().shape({
  video: helpers.getFileShema(
    0,
    1,
    consts.files.vidTypes,
    consts.files.vidSize
  ),
  images: helpers.getFileShema(1, 5),
  gender: Yup.string().required('Gender is Required'),
  weight: Yup.number().required('Weight is required'),
  age: Yup.number().required('Age is required'),
  price: Yup.number().required('Price is required'),
  title: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(50, 'Title is too long')
    .required('Title name is Required'),
  category: Yup.string().required('Category name is Required'),
  breed: Yup.string()
    .max(40, 'Breed is too long')
    .required('Breed is Required'),
  quantity: Yup.number().required('Age is required'),
});
