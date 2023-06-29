import React, { useEffect, useState } from 'react'
import { getJobApplications } from '../services/APIcalls/jobs'
import ApplicationCard from '../Components/ApplicationCard'

function Dashboard() {

    const [applications,setApplications] = useState([])

    useEffect(()=>{
       const getData = async()=>{
        const data =  await getJobApplications()
       setApplications(data)
       }
       getData()
    },[])
  return (
      <div>
  <h1 className='text-2xl font-bold pb-5' >dash Board</h1>
  <p className='text-xl font-semibold p-5'>applications </p>
  <div className='drop-shadow-xl p-5 bg-slate-50 rounded-lg overflow-y-scroll w-full max-w-7xl h-full max-h-[25rem]' >
     <div className='flex flex-row flex-wrap gap-6 justify-center'>
     {applications&&applications.length>0 ? applications.map(item=>{
        return <ApplicationCard item={item} />
      }):<>no data</>}
     </div>
      
    </div>
      </div>
  )
}

export default Dashboard
 