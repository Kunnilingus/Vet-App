import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CallFormState {
  flag: boolean;
  cancellState: boolean;
}
const initialState: CallFormState = {
  flag: false,
  cancellState: true,
};

export const callFormSlice = createSlice({
  name: "callForm",
  initialState,
  reducers: {
    show: (state) => {
      state.flag = true;
    },
    hide: (state) => {
      state.flag = false;
    },
    toggle: (state) => {
      state.flag ? (state.flag = false) : (state.flag = true);
    },
    cancell: (state, action: PayloadAction<boolean>) => {
      state.cancellState = action.payload;
    },
  },
});

export const { show, hide, toggle, cancell } = callFormSlice.actions;
export default callFormSlice.reducer;
