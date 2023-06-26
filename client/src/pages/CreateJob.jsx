import React, { useState } from 'react'
import FetchCall from '../utils/FetchCalls'
import { useNavigate } from 'react-router-dom'
import { postJob } from '../services/APIcalls/jobs'

function CreateJob() {
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleJobSubmit =async(e)=>{
        e.preventDefault()
      const res = await postJob({title,description})
      if(res.fetchData.status ==200){
         navigate('/')
      }

    }
  return (
    <div className='grid place-items-center'>
       <form className='flex flex-col gap-6 bg-white rounded-xl w-full p-20 max-w-xl' onSubmit={(e)=>handleJobSubmit(e)} > 
            <h1 className='text-3xl font-bold py-5 '>Create a job</h1>
            <input type="text" className=' input-field w-full' placeholder='title' name='title' id='title' onChange={(e)=>setTitle(e.target.value)} />
            <textarea type="text" className=' input-field w-full' placeholder='description' name='description' id='description' onChange={(e)=>setDescription(e.target.value)} />
            <button className='p-3 bg-red-400 rounded-lg text-white font-semibold text-xl w-full'>post</button>
       </form>
    </div>
  )
}

export default CreateJob
