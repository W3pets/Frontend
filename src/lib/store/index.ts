import { configureStore } from '@reduxjs/toolkit';
import { isLive } from '@/model/consts';
// Based on the error, 'user', 'seller', and 'global' are directly importing the reducer functions.
// If they were full slice objects, they would have a '.reducer' property.
import user from './slices/user/slice';
import seller from './slices/seller/slice';
import global from './slices/globalSlice';
import chatReducer from './slices/chatSlice';

const makeStore = () => {
  return configureStore({
    reducer: {
      // Corrected: Using the directly imported reducer functions.
      // The error "Property 'reducer' does not exist" confirms that 'user', 'seller',
      // and 'global' are already the reducer functions themselves.
      user: user,
      seller: seller,
      global: global,
      chat: chatReducer,
    },
    devTools: !isLive,
  });
};

export const store = makeStore();
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
