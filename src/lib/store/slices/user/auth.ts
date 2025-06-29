import { UserMini } from '@/model/DTO/user/auth';
import { AuthStore } from '@/model/types/user/auth';
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
    setSellerStatus: (state, action: PayloadAction<boolean>) => {
      if (state.user) state.user.isSeller = action.payload;
      return state;
    },
  },
});

export default authSlice;
