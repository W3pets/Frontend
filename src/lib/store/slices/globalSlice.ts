import { utils } from '@/lib/utils/base';
import { APIStatusDTO } from '@/model/DTO/global';
import { GlobalStore } from '@/model/types/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: GlobalStore = {
  msg: null,
};

const globalSlice = createSlice({
  name: 'Global',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    resetMsg: (state) => {
      return { ...state, msg: null };
    },
    setMsg: (
      state,
      action: PayloadAction<APIStatusDTO & { time?: number }>
    ) => {
      const status = utils.getStatusWithCategory(action.payload);
      return { ...state, msg: status };
    },
  },
});

export default globalSlice;
