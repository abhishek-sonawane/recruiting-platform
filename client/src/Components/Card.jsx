import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdWorkHistory} from 'react-icons/md'

function Card({details}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/job/${details._id}`)} className='p-7 flex flex-col border text-left rounded-xl font-bold text-slate-900'>
      <p className=' text-2xl py-7'>{details.title}</p>
      <div>
      <p className='text-gray-500'>{details.createdAt&&new Date(details.createdAt).toLocaleString().split(',')[0]}</p>
     {details.experience &&
       <p className='text-gray-500 flex flex-row items-center gap-2 py-2' >
       <MdWorkHistory />
        {details.experience}</p>
     }
      {/* <p className=' max-w-xl  text-gray-500 font-medium '>{details.description}</p> */}
      </div>
    </div>
  )
}

export default Card
