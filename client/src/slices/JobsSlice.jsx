import { createSlice } from "@reduxjs/toolkit";

const JobsSlice = createSlice({
    name:'jobs',
    initialState:[],
    reducers:{
        setInitialJobs: (state,action)=>{
            return action.payload
        },
    }
})

export const {setInitialJobs} = JobsSlice.actions
export default JobsSlice.reducer