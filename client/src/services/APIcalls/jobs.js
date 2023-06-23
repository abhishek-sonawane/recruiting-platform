
// get all jobs 
export const getJobs = async()=>{
    const res = await fetch(import.meta.env.VITE_BACKEND_ENDPOINT,{mode: 'cors',
    credentials: 'include'})
    const data = res.json()
    return data
}


// get single job 
export const getSingleJob =async(id)=>{
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/${id}`)
    const data = res.json()
    return data
}


export const postJob = async()=>{
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}`)
}

