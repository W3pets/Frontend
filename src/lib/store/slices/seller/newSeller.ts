import {
  ListingSchema,
  NewSellerSchema,
  NewSellerSchema2,
} from '@/model/DTO/seller';
import { NewSellerStore } from '@/model/types/seller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InferType } from 'yup';

export const initialState: NewSellerStore = {
  profile: {
    business_name: '',
    city: '',
    state: '',
    business_address: '',
    location_coords: { lat: 0.0, lng: 0.0 },
    contact_phone: '',
    brand_image: [],
    seller_uniqueness:
      'Welcome to my W3Pets store! I’m dedicated to providing healthy, well-cared-for pets and livestock.',
    isValid: false,
  },
  id: { id: [] },
  listing: {
    weight: 28,
    quantity: 1,
    gender: '',
    age: 1,
    price: 5000,
    product_title: '',
    product_category: '',
    product_brand: '',
    product_photos: [],
    product_video: [],
  },
};

const newSellerSlice = createSlice({
  name: 'New Seller',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    setProfile: (
      state,
      action: PayloadAction<
        InferType<typeof NewSellerSchema> & { isValid: boolean }
      >
    ) => {
      return { ...state, profile: action.payload };
    },
    setId: (
      state,
      action: PayloadAction<InferType<typeof NewSellerSchema2>>
    ) => {
      return { ...state, id: action.payload };
    },
    setListing: (
      state,
      action: PayloadAction<InferType<typeof ListingSchema>>
    ) => {
      return { ...state, listing: action.payload };
    },
  },
});

export default newSellerSlice;
