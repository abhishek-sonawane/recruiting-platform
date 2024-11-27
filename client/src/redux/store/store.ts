import { configureStore } from "@reduxjs/toolkit";
// import { setInitialJobs } from './slices/JobsSlice'
import JobsSlice from "../slices/JobsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ApplicationSlice from "../slices/ApplicationSlice";
import userSlice from "../slices/userSlice";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "key",
  storage,
  whiteList: ["User"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
