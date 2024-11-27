import { combineReducers } from "@reduxjs/toolkit";
import JobsSlice from "../slices/JobsSlice";
import ApplicationSlice from "../slices/ApplicationSlice";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
  jobs: JobsSlice,
  Application: ApplicationSlice,
  User: userSlice,
});

export default rootReducer;
