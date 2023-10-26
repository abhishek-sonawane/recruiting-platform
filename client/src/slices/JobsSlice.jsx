import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, getSingleJob } from "../services/APIcalls/jobs";

export const getInitialJobs = createAsyncThunk('jobs/getInitialJobs',
async()=>{
    const data = await getJobs()
    console.log(data)
    return data

})

export const getSingleJobs = createAsyncThunk('jobs/getSingleJobs',
async(jobID)=>{
    return await getSingleJob(jobID)
}
)
const JobsSlice = createSlice({
    name:'jobs',
    initialState:{
        listOfJobs:[],
        singleJob:{}
    },
    reducers:{
        // setInitialJobs: (state,action)=>{
        //     return action.payload
        // },
    },
    extraReducers: (builder)=>{
        builder.addCase(getInitialJobs.pending,(state,action)=>{
            // state.listOfJobs =[]
        })
        builder.addCase(getInitialJobs.rejected,(state,action)=>{
            // state.listOfJobs = []
        })
        builder.addCase(getInitialJobs.fulfilled,(state,action)=>{
            console.log('payload',action.payload)
            state.listOfJobs = action.payload
            console.log('updated Stae',state.listOfJobs)
        })


        builder.addCase(getSingleJobs.fulfilled,(state,action)=>{
            state.singleJob = action.payload
        })
    }
})

// export const {setInitialJobs} = JobsSlice.actions
export default JobsSlice.reducer