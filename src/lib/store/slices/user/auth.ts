import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AuthStore = {
  isAuth: false,
  isSeller: false,
};

const authSlice = createSlice({
  name: 'User Auth',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
});

export default authSlice;
