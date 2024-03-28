import { IBirdList } from "@/models/IBirdList";
import { ICatList } from "@/models/ICatList";
import { IDogList } from "@/models/IDogList";
import { IExotList } from "@/models/IExotList";
import { IReptileList } from "@/models/IReptileList";
import { IRodentList } from "@/models/IRodentList";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  dogs: IDogList[];
  cats: ICatList[];
  rodents: IRodentList[];
  birds: IBirdList[];
  reptiles: IReptileList[];
  exots: IExotList[];
}
const initialState: InitialStateProps = {
  dogs: [],
  cats: [],
  rodents: [],
  birds: [],
  reptiles: [],
  exots: [],
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setDog(state, action: PayloadAction<IDogList>) {
      state.dogs.push(action.payload);
    },
    deleteDog(state, action) {
      state.dogs.splice(action.payload, 1);
    },
    setCat(state, action: PayloadAction<ICatList>) {
      state.cats.push(action.payload);
    },
    deleteCat(state, action) {
      state.cats.splice(action.payload, 1);
    },
    setRodent(state, action: PayloadAction<IRodentList>) {
      state.rodents.push(action.payload);
    },
    deleteRodent(state, action) {
      state.rodents.splice(action.payload, 1);
    },
    setBird(state, action: PayloadAction<IBirdList>) {
      state.birds.push(action.payload);
    },
    deleteBird(state, action) {
      state.birds.splice(action.payload, 1);
    },
    setReptile(state, action: PayloadAction<IReptileList>) {
      state.reptiles.push(action.payload);
    },
    deleteReptile(state, action) {
      state.reptiles.splice(action.payload, 1);
    },
    setExot(state, action: PayloadAction<IExotList>) {
      state.exots.push(action.payload);
    },
    deleteExot(state, action) {
      state.exots.splice(action.payload, 1);
    },
  },
});

export const {
  setDog,
  deleteDog,
  setCat,
  deleteCat,
  setRodent,
  deleteRodent,
  setBird,
  deleteBird,
  setReptile,
  deleteReptile,
  setExot,
  deleteExot,
} = petSlice.actions;
export default petSlice.reducer;
