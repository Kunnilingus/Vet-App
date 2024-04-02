import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalsState {
  flag: boolean;
  petModalFlag: boolean;
  meetsModalFlag: boolean;
  cancellState: boolean;
}
const initialState: ModalsState = {
  flag: false,
  petModalFlag: false,
  meetsModalFlag: false,
  cancellState: true,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    show: (state) => {
      state.flag = true;
    },
    showPetModal: (state) => {
      state.petModalFlag = true;
    },
    showMeetsModal: (state) => {
      state.meetsModalFlag = true;
    },
    hide: (state) => {
      state.flag = false;
    },
    hidePetModal: (state) => {
      state.petModalFlag = false;
    },
    hideMeetsModal: (state) => {
      state.meetsModalFlag = false;
    },
    toggle: (state) => {
      state.flag ? (state.flag = false) : (state.flag = true);
    },
    cancell: (state, action: PayloadAction<boolean>) => {
      state.cancellState = action.payload;
    },
  },
});

export const {
  show,
  hide,
  toggle,
  cancell,
  showPetModal,
  hidePetModal,
  showMeetsModal,
  hideMeetsModal,
} = modalsSlice.actions;
export default modalsSlice.reducer;
