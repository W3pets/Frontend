import helpers from '@/helpers';
import consts from '@/model/consts';
import * as Yup from 'yup';

export const NewSellerSchema = Yup.object().shape({
  business_name: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(50, 'Business name too long')
    .required('Business name is Required'),
  business_address: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(100, 'Business address too long')
    .required('Business address is Required'),
  city: Yup.string()
    .matches(/[a-zA-Z\s]/, 'Only Letters are allowed')
    .max(20, 'City too long')
    .required('City is Required'),
  state: Yup.string()
    .max(20, 'State too long')
    .matches(/[a-zA-Z\s]/, 'Only Letters are allowed')
    .required('State is Required'),
  contact_phone: Yup.string()
    .matches(/\d{3}\s\d{3}\s\d{4}/, 'Invalid Phone number')
    .required('Phone number required'),
  seller_uniqueness: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(240, 'Comment too long')
    .required('Required'),
  location_coords: Yup.object().shape({
    lat: Yup.number().required('Please Input location'),
    lng: Yup.number().required('Please Input location'),
  }),
  brand_image: helpers.getFileShema(1),
});

export const NewSellerSchema2 = Yup.object().shape({
  id: helpers.getFileShema(1),
});

export const ListingSchema = Yup.object().shape({
  product_video: helpers.getFileShema(
    1,
    1,
    false,
    consts.files.vidTypes,
    consts.files.vidSize
  ),
  product_photos: helpers.getFileShema(1, 5),
  gender: Yup.string().required('Gender is Required'),
  weight: Yup.number().required('Weight is required'),
  age: Yup.number().required('Age is required'),
  price: Yup.number().required('Price is required'),
  product_title: Yup.string()
    .matches(
      /[a-zA-Z@_/\/()-]/,
      'Only Latin and Limited Special Characters are allowed'
    )
    .max(50, 'Title is too long')
    .required('Title name is Required'),
  product_category: Yup.string().required('Category name is Required'),
  product_brand: Yup.string()
    .max(40, 'Breed is too long')
    .required('Breed is Required'),
  quantity: Yup.number().required('Age is required'),
});
