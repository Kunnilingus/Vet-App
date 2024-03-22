import { IDogList } from "@/models/IDogList";
import { IUser } from "@/models/IUser";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  users: IUser[];
}
const initialState: InitialStateProps = {
  users: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserSettings(state, action) {
      state.users.push({
        token: action.payload.token,
        email: action.payload.email,
        id: action.payload.id,
        name: action.payload.name,
        secondName: action.payload.secondName,
        thirdName: action.payload.thirdName,
        number: action.payload.number,
        dogs: action.payload.dogs,
        password: action.payload.password,
      });
    },
  },
});

export const { setUserSettings } = userInfoSlice.actions;
export default userInfoSlice.reducer;
