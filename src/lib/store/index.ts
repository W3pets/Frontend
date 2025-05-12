import { configureStore } from '@reduxjs/toolkit';
import { isLive } from '@/model/consts';
import user from './slices/user/slice';
import seller from './slices/seller/slice';
import global from './slices/globalSlice';

const makeStore = () => {
  return configureStore({
    reducer: { user, seller, global: global.reducer },
    devTools: !isLive,
  });
};

// Infer the type of makeStore
export const store = makeStore();
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
