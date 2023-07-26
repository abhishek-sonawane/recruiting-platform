import {configureStore} from '@reduxjs/toolkit'
// import { setInitialJobs } from './slices/JobsSlice'
import JobsSlice from './slices/JobsSlice'


const store = configureStore({
    reducer:{
        setJobs:JobsSlice
    }
})


export default store