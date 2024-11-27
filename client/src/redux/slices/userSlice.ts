import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  logoutUserThunk,
  recieveUsrDetails,
} from "../thunks/userThunk";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(recieveUsrDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(recieveUsrDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(recieveUsrDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(loginUserThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.data = action.payload;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(logoutUserThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.data = null;
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
