
export const globalOptions = {
    credentials: 'include',
        headers: {
            Authorization: `bearer ${JSON.parse(localStorage.getItem('userData'))?.token}`
        }
}

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
        ...globalOptions,
        method:'POST',
        headers: { 
            ...globalOptions.headers,
            'Content-Type': 'application/json'
         },
        body:JSON.stringify({title:payload.title,description:payload.description,experience:payload.experience,job_type:payload.jobType})
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
   try {
    const data = new FormData()
    data.append('job_id',id)
    data.append('name',payload.name)
    data.append('email',payload.email)  
    data.append('pdf',payload.file)
    console.log(data)
    const options  = {
        ...globalOptions,
        method:'POST',
         // headers: { 'Content-Type': 'application/json' },
        body:data
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/apply`,options)
    const resultData = res.json()
    return {res,resultData}
   } catch (error) {
    console.log('error from postApplyJob::',error)
   }
}


// get list of applications 

export const getJobApplications = async()=>{
    const options  = {
        ...globalOptions,
        method:'GET'
        // headers: { 'Content-Type': 'application/json' },
        // body:data
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/recruiter/applications`,options)
    const resultData = res.json()
    console.log('working')
    return resultData

}


// update job applications

export const postEditJob = async(id,title,description)=>{

    const options ={
        ...globalOptions,
        method:'POST',
        headers: { 
            ...globalOptions.headers,
            'Content-Type': 'application/json' },
        body:JSON.stringify({title,description}),
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/update/${id}`,options)
    const data = res.json()
    return data
}

export const postDeleteJob = async(id)=>{
    const options ={
        ...globalOptions,
        method:'POST',
        headers: {
            ...globalOptions.headers, 
            'Content-Type': 'application/json'
         }

    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/delete/${id}`,options)
    const resultData = res.json()
    return resultData
}


export const changeApplicationStatus =async(id,payload)=>{
    const options = {
        ...globalOptions,
        method:'POST',
        headers: { 
            ...globalOptions.headers,
            'Content-Type': 'application/json' },
        body:JSON.stringify({
            job_id: id,
            data:payload
        })
    }
   try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/job/apply/edit`,options)
    const data = await res.json()
    return data
   } catch (error) {
    console.error(error.message)
   }
}