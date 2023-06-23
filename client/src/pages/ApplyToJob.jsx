import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postApplyJob } from '../services/APIcalls/jobs'

function ApplyToJob() {
    const {jobID} = useParams()
    const [file,setFile] = useState() 
    const [name,setName] = useState()
    const [email,setEmail] = useState()

    const handleSubmit =(e)=>{
        e.preventDefault()
        postApplyJob(jobID,{file:file,name:name,email:email})
    }

  return (
    <div>
     <form onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
        <button>submit</button>
     </form>
    </div>
  )
}

export default ApplyToJob
