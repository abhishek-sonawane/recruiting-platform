import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApplyJob } from "../services/APIcalls/jobs";

export const postJobApplication = createAsyncThunk(
  "jobs/postJobApplication",
  async (jobID, { file, name, email }) => {
    console.log("data passed to from thunk middleware", jobID, name);
    const res = await postApplyJob(jobID, {
      file,
      name,
      email,
    });
    //{res.resultData}
    console.log("responsse from thunk middleware", res);
    return res;
  }
);
