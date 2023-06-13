import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function SingleJob() {
    const navigate = useNavigate()
    const {jobID} = useParams()
    const [job,setJob] = useState({})

    const applyToJob = ()=>{
        navigate(`/job/apply/${jobID}`)
    }

    useEffect(()=>{
        const fetchdata =  async()=>{
          try {
            const results = await  fetch(`http://localhost:3000/job/${jobID}`)
            const data = await results.json()
            console.log(data)
            setJob(data)
          } catch (error) {
           navigate('/404')
          }
           }
      fetchdata()
    },[])
  return (
    <div className='p-10 text-left'>
        <button onClick={()=>navigate('/')} className='px-4 py-2 bg-slate-400 rounded-lg text-lg flex items-center gap-3 top-4 absolute left-3 text-slate-800 font-medium'  > <BiArrowBack/> go back</button>
        <h1 className=' text-3xl font-semibold '  >{job.title}</h1>
        <p className=' text-lg py-7 max-w-2xl w-full'>{job.description}</p>
        <button className=' px-5 py-3 text-xl text-white font-semibold bg-red-400 rounded-xl' onClick={()=>applyToJob()} >Apply now</button>
    </div>
  )
}

export default SingleJob
