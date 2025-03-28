import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import cartSlice from '../cart/slice';

const slice = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
});

export default slice;
