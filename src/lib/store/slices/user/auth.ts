import { AuthStore, UserMini } from '@/model/types/user/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AuthStore = {
  isAuth: false,
  user: null,
  justRegistered: '',
};

const authSlice = createSlice({
  name: 'User Auth',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    loggedIn: (state, action: PayloadAction<UserMini>) => {
      return { ...state, isAuth: true, user: action.payload };
    },
    setJustRegistered: (state, action: PayloadAction<string>) => {
      return { ...state, justRegistered: action.payload };
    },
  },
});

export default authSlice;
