import { createSlice } from "@reduxjs/toolkit";
import { postJobApplicationThunk } from "../thunks/applicationThunk";

export const ApplicationSlice = createSlice({
  name: "Application",
  initialState: {
    singleApplication: {
      loading: false,
      submitted: false,
      error: null,
      response: {},
    },
  },
  reducers: {
    // setLoading
  },
  extraReducers: (builder) => {
    builder.addCase(postJobApplicationThunk.pending, (state) => {
      state.singleApplication.loading = true;
    });

    builder.addCase(postJobApplicationThunk.fulfilled, (state, action) => {
      state.singleApplication.loading = false;
      state.singleApplication.submitted = true;
      state.singleApplication.response = action.payload;
    });

    builder.addCase(postJobApplicationThunk.rejected, (state, action) => {
      state.singleApplication.loading = false;
      state.singleApplication.submitted = false;

      state.singleApplication.error = action.payload;
    });
  },
});

// export const {setInitialJobs} = JobsSlice.actions
export default ApplicationSlice.reducer;
