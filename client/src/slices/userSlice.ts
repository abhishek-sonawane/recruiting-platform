import { createSlice } from "@reduxjs/toolkit";
import { recieveUsrDetails } from "../thunks/userThunk";

const userSlice = createSlice({
    name: 'User',
    initialState: {
        data: {},
        loading: false,
        error: false
    },
    reducers: {

    }
    ,
    extraReducers: (builder) => {
        builder.addCase(recieveUsrDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(recieveUsrDetails.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(recieveUsrDetails.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }
})

export default userSlice.reducer