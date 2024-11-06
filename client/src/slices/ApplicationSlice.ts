import { createSlice } from "@reduxjs/toolkit";
import { postJobApplication } from "../thunks/applicationThunk";

export const ApplicationSlice = createSlice({
    name: 'Application',
    initialState: {
        singleApplication: {
            loading: false,
            submitted: false,
            error: false,
            response: {

            }
        }
    },
    reducers: {
        // setLoading

    },
    extraReducers: (builder) => {

        builder.addCase(postJobApplication.pending, (state) => {
            state.singleApplication.loading = true
        })

        builder.addCase(postJobApplication.fulfilled, (state, action) => {
            state.singleApplication.loading = false
            state.singleApplication.submitted = true
            state.singleApplication.response = action.payload
        })

        builder.addCase(postJobApplication.rejected, (state) => {
            state.singleApplication.loading = false
            state.singleApplication.error = true
        })
    }
})

// export const {setInitialJobs} = JobsSlice.actions
export default ApplicationSlice.reducer