import { combineReducers, configureStore } from "@reduxjs/toolkit";
import callFormReducer from "./slices/callFormSlice";

const rootReducer = combineReducers({
  callForm: callFormReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
