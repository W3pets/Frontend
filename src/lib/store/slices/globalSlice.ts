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
      // console.log('status', status);
      return { ...state, msg: status };
    },
  },
});

// Corrected: Export the reducer function as the default export
export default globalSlice.reducer;

// If you need to export actions, do it like this:
// export const { resetState, resetMsg, setMsg } = globalSlice.actions;
