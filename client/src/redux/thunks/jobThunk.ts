import { createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs, getSingleJob, postJob } from "../../services/APIcalls/jobs";

export const getInitialJobs = createAsyncThunk(
  "jobs/getInitialJobs",
  async (payload, thunkAPI) => {
    try {
      const data = await getJobs();
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      console.log(error);
    }
  }
);

export const getSingleJobs = createAsyncThunk(
  "jobs/getSingleJobs",
  async (jobID, thunkAPI) => {
    try {
      const data = await getSingleJob(jobID);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      console.log(error);
    }
  }
);

export const postJobThunk = createAsyncThunk(
  "jobs/postJob",
  async (payload, thunkAPI) => {
    try {
      const response = await postJob(payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
