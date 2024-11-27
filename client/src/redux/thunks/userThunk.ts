import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserDetails,
  loginUser,
  postLogoutFromServer,
} from "../../services/APIcalls/user";

export const recieveUsrDetails = createAsyncThunk(
  "User/getUserDetails",
  async (id, thunkAPI) => {
    try {
      const response = await getUserDetails(id);
      return response?.data;
    } catch (error) {
      console.log("error with Usr details Thunk::", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "loginUserThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await loginUser(payload?.username, payload?.password);
      return response?.data;
    } catch (error) {
      console.log("error with loginUser Thunk::", error.response);
      const errorMessage =
        error.response?.data ||
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";
      return thunkAPI.rejectWithValue(errorMessage); // Pa
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "logoutUserThunk",
  async (payload, thunkAPI) => {
    try {
      await postLogoutFromServer();
      // console.log(dat);
      return true;
    } catch (error) {
      console.log("error with loginUser Thunk::", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
