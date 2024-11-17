import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApplyJob } from "../../services/APIcalls/jobs";

export const postJobApplicationThunk = createAsyncThunk(
  "jobs/postJobApplication",
  async ({ jobID, file, name, email }, thunkAPI) => {
    try {
      console.log("data passed to from thunk middleware", jobID, name);
      const res = await postApplyJob(jobID, {
        file,
        name,
        email,
      });
      //{res.resultData}
      console.log("responsse from thunk middleware", res);
      return res;
    } catch (error) {
      console.log("error while posting job application thunk", error);
      const errorMessage =
        error.response?.data ||
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";
      return thunkAPI.rejectWithValue(errorMessage); // Pass extracted message
    }
  }
);
