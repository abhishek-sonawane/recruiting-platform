
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
export const postJob = async(payload)=>{
    // const data = new FormData()
    // data.append('title',payload.title)
    // data.append('description',payload.description)
    const options  = {
        method:'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({title:payload.title,description:payload.description})
    }
    const fetchData = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/post/post-job`,options)
    const results = fetchData.json()
    //    console.log(fetchData.fetchedData)
    // if(fetchData.status==200){
    // navigate('/')
    // }

    return {fetchData,results}
    
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