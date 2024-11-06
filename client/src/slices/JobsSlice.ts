import { createSlice } from "@reduxjs/toolkit";
import { getInitialJobs, getSingleJobs } from "../thunks/jobThunk";

const JobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        listOfJobs: [],
        singleJob: {}
    },
    reducers: {
        // setInitialJobs: (state,action)=>{
        //     return action.payload
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getInitialJobs.pending, (state) => {
            // state.listOfJobs =[]
        })
        builder.addCase(getInitialJobs.rejected, (state) => {
            // state.listOfJobs = []
        })
        builder.addCase(getInitialJobs.fulfilled, (state, action) => {
            console.log('payload', action.payload)
            state.listOfJobs = action.payload
            console.log('updated Stae', state.listOfJobs)
        })


        builder.addCase(getSingleJobs.fulfilled, (state, action) => {
            state.singleJob = action.payload
        })
    }
})

// export const {setInitialJobs} = JobsSlice.actions
export default JobsSlice.reducer