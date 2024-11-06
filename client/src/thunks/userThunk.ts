import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDetails } from "../services/APIcalls/user";

export const recieveUsrDetails = createAsyncThunk(
  "User/getUserDetails",
  async (id) => {
    return await getUserDetails(id);
  }
);
