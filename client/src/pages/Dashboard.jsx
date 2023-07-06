import React, { useEffect, useState } from 'react'
import { getJobApplications, getJobs,postDeleteJob } from '../services/APIcalls/jobs'
import ApplicationCard from '../Components/ApplicationCard'
import ConfirmModal from '../Components/ConfirmModal'
import JobTableCard from '../Components/JobTableCard'

function Dashboard() {

    const [applications,setApplications] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
       const getData = async()=>{
        const data =  await getJobApplications()
        setApplications(data)
        const jobData = await getJobs()
       setJobs(jobData)
       }
       getData()
    },[])

  
  return (
      <div>
  <h1 className='text-2xl font-bold pb-5' >dash Board</h1>
  <p className='text-xl font-semibold p-5'>applications </p>
  {/* applications section */}
  <div className='drop-shadow-xl p-5 bg-slate-50 rounded-lg overflow-auto  w-full max-w-7xl h-full max-h-[25rem]' >
    <div >
    <div className='flex flex-row flex-wrap gap-6 justify-center'>
     {applications && applications.length>0 ? applications.map(item=>{
        return <ApplicationCard item={item} />
      }):<>no Applications found</>}
     </div>
    </div>
      
    </div>



    {/* jobs section*/}
       
    <div className=' mx-auto m-5 p-5 w-full max-w-8xl drop-shadow-xl   bg-white flex flex-col' >
      {/* jobs edit section */}
      <h1 className='text-2xl p-6'>Edit jobs</h1>
      {jobs&&jobs.length>0?jobs.map(item=>{
        return <JobTableCard item={item} jobs={jobs} setJobs={setJobs}/>

      }):<>no Jobs found</>}

      {/* <ConfirmModal  /> */}

    </div>
      </div>
  )
}

export default Dashboard
 