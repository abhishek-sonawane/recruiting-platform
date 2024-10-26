import {configureStore} from '@reduxjs/toolkit'
// import { setInitialJobs } from './slices/JobsSlice'
import JobsSlice from './slices/JobsSlice'
import ApplicationSlice from './slices/ApplicationSlice'
import userSlice from './slices/userSlice'


const store = configureStore({
    reducer:{
        jobs:JobsSlice,
        Application:ApplicationSlice,
        User: userSlice
    }
})


export default store