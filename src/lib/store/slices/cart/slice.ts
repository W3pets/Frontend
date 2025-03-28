import { CartStore } from '@/model/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: CartStore[] = [];

const cartSlice = createSlice({
  name: 'User Cart',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
});

export default cartSlice;
