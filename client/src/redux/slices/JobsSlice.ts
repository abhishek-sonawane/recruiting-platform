import { createSlice } from "@reduxjs/toolkit";
import { getInitialJobs, getSingleJobs } from "../thunks/jobThunk";

const JobsSlice = createSlice({
  name: "jobs",
  initialState: {
    listOfJobs: [],
    loading: false,
    error: null,
    singleJob: {},
  },
  reducers: {
    // setInitialJobs: (state,action)=>{
    //     return action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialJobs.pending, (state) => {
      state.loading = true;
      // state.listOfJobs =[]
    });
    builder.addCase(getInitialJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfJobs = action.payload;
    });
    builder.addCase(getInitialJobs.rejected, (state, action) => {
      // state.listOfJobs = []
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleJobs.fulfilled, (state, action) => {
      state.singleJob = action.payload;
    });
  },
});

// export const {setInitialJobs} = JobsSlice.actions
export default JobsSlice.reducer;
