import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApplyJob } from "../services/APIcalls/jobs";

export const postJobApplication = createAsyncThunk('jobs/postJobApplication',
    async(jobID,{file,name,email})=>{
        const res = await postApplyJob(jobID, {
            file,
            name,
            email
          })
          return res
}
)

export const ApplicationSlice = createSlice({
    name:'Application',
    initialState:{
            singleApplication: {
                loading:false,
            submitted: false,
            error : true,
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
            state.singleApplication.response.res = action.payload.res
        })

        builder.addCase(postJobApplication.rejected,(state)=>{
            state.singleApplication.loading = false
            state.singleApplication.error = true
        })
    }
})

// export const {setInitialJobs} = JobsSlice.actions
export default ApplicationSlice.reducer