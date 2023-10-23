import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import { getSingleJob } from '../services/APIcalls/jobs'
import { MdWorkHistory } from 'react-icons/md'

function SingleJob() {
    const navigate = useNavigate()
    const {jobID} = useParams()
    const [job,setJob] = useState({})

    const applyToJob = ()=>{
         navigate(`/job/apply/${jobID}`,{
          state:{title:job.title}
        })
    }

    useEffect(()=>{
        const fetchdata =  async()=>{
          try {
            const data = await getSingleJob(jobID)
            console.log(data)
            setJob(data)
            // if(results.status===403){
            //   throw new Error
            // }
            document.title = data.title
          } catch (error) {
            console.log(`error: ${error.message}`)
           navigate('/404')
          }
           }
      fetchdata()
    },[])
  return (
    <div className='pl-20 text-left'>
        <button onClick={()=>navigate('/')} className='px-4 py-2 bg-slate-400 rounded-lg text-lg flex items-center gap-3 top-4 absolute left-27 text-slate-800 font-medium'  > <BiArrowBack/> go back</button>
       <div className='mt-20'>
       <h1 className=' text-3xl font-semibold '>{job.title}</h1>
        <p className=' text-lg py-7 max-w-2xl w-full'>{job.description}</p>
        <p>created : {new Date(job?.createdAt).toLocaleString().split(',')[0]}</p>
        <p className='flex flex-row items-center gap-2 py-5' >
        <MdWorkHistory />
        {job?.experience}
        </p>
        <button className=' px-5 py-3 text-xl text-white font-semibold bg-red-400 rounded-xl' onClick={()=>applyToJob()} >Apply now</button>
       </div>
    </div>
  )
}

export default SingleJob
