import { AuthStore, UserMini } from '@/model/types/user/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AuthStore = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'User Auth',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    loggedIn: (state, action: PayloadAction<UserMini>) => {
      return { isAuth: true, user: action.payload };
    },
  },
});

export default authSlice;
