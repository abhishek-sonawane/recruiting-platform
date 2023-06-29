import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { postApplyJob } from '../services/APIcalls/jobs'

function ApplyToJob() {
    const {jobID} = useParams()
    const [file,setFile] = useState() 
    const [name,setName] = useState()
    const [email,setEmail] = useState()

    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const res = await postApplyJob(jobID,{file:file,name:name,email:email})
        if(res.res.status===200){
          navigate('/')
        }
    }

  return (
    <div className='grid place-content-center' >
     <form className='flex flex-col gap-6 bg-white rounded-xl w-full p-20 max-w-xl'  onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'>
     <input className=' input-field w-full' placeholder='your name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
     <input className=' input-field w-full' placeholder='email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
        <button className='p-3 bg-red-400 rounded-lg text-white font-semibold text-xl w-full' >submit</button>
     </form>
    </div>
  )
}

export default ApplyToJob
