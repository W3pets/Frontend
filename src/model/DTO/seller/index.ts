import helpers from '@/helpers';
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
