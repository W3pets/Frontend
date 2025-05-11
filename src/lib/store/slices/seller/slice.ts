import { combineReducers } from '@reduxjs/toolkit';
import newSellerSlice from './newSeller';

const slice = combineReducers({
  newSeller: newSellerSlice.reducer,
});

export default slice;
