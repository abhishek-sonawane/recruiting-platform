
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

// post job (for HR)
export const postJob = async()=>{
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}`)
}



//apply to job (for everyone)
export const postApplyJob = async(id,payload)=>{
    const data = new FormData()
    data.append('name',payload.name)
    data.append('email',payload.email)
    data.append('pdf',payload.file)
    console.log(data)
    const options  = {
        method:'POST',
        credentials: 'include',
        // headers: { 'Content-Type': 'application/json' },
        body:data
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/apply`,options)
    const resultData = res.json()
    return resultData
}
