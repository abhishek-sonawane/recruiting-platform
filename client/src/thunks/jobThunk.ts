import { createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs, getSingleJob } from "../services/APIcalls/jobs";

export const getInitialJobs = createAsyncThunk(
  "jobs/getInitialJobs",
  async () => {
    const data = await getJobs();
    console.log(data);
    return data;
  }
);

export const getSingleJobs = createAsyncThunk(
  "jobs/getSingleJobs",
  async (jobID) => {
    return await getSingleJob(jobID);
  }
);
