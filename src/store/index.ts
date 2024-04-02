import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./slices/modalsSlice";
import userReducer from "./slices/userSlice";
import userInfoReducer from "./slices/userInfoSlice";
import petsReducer from "./slices/petSlice";
import meetingReducer from "./slices/meetingSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  modals: modalsReducer,
  user: userReducer,
  userInfo: userInfoReducer,
  pets: petsReducer,
  meetings: meetingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
