import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApplyJob } from "../services/APIcalls/jobs";

export const postJobApplication = createAsyncThunk('jobs/postJobApplication',
    async(jobID,{file,name,email})=>{
        console.log('data passed to from thunk middleware',jobID,name)
        const res = await postApplyJob(jobID, {
            file,
            name,
            email
          })
          //{res.resultData}
          console.log('responsse from thunk middleware',res)
          return res
}
)

export const ApplicationSlice = createSlice({
    name:'Application',
    initialState:{
            singleApplication: {
                loading:false,
            submitted: false,
            error : false,
            response : {
                
            }
            }
    },
    reducers:{
        // setLoading
       
    },
    extraReducers : (builder)=>{

        builder.addCase(postJobApplication.pending,(state)=>{
            state.singleApplication.loading = true
        })

        builder.addCase(postJobApplication.fulfilled,(state,action)=>{
            state.singleApplication.loading = false
            state.singleApplication.submitted = true
            state.singleApplication.response = action.payload
        })

        builder.addCase(postJobApplication.rejected,(state)=>{
            state.singleApplication.loading = false
            state.singleApplication.error = true
        })
    }
})

// export const {setInitialJobs} = JobsSlice.actions
export default ApplicationSlice.reducer