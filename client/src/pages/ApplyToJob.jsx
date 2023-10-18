import React, { useState } from 'react'
import { useParams,useNavigate, useLocation } from 'react-router-dom'
import { postApplyJob } from '../services/APIcalls/jobs'
import { useToast } from '../context/ToastContext'


function ApplyToJob({route}) {
  const {jobID} = useParams()
    const [file,setFile] = useState() 
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation();
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const res = await postApplyJob(jobID,{file:file,name:name,email:email})
        if(res.res.status===200){
          navigate('/')
          toast.open(
            <div className="alert alert-success">
            <span>Applied to job Successfully.</span>
          </div>)

        }
    }

  return (
    <div className='grid place-content-center' >
      <p className=' text-3xl font-semibold' >{location.state.title}</p>
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
