import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../services/APIcalls/user";


export const recieveUsrDetails = createAsyncThunk('User/getUserDetails',
async (id)=>{
   return await getUserDetails(id)
}
)

const userSlice = createSlice({
    name:'User',
    initialState:{
        data:{},
        loading:false,
        error:false
    },
    reducers : {
        
    }
    ,
    extraReducers: (builder)=>{
        builder.addCase(recieveUsrDetails.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(recieveUsrDetails.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(recieveUsrDetails.rejected,(state)=>{
            state.loading = false
            state.error = true
        })
    }
})

export default userSlice.reducer