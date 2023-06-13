import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({details}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`job/${details._id}`)} className='p-7 border text-left rounded-xl font-bold text-slate-900'>
      <p className=' text-2xl py-7'>{details.title}</p>
      <p className=' max-w-xl  text-gray-500 font-medium'>{details.description}</p>
    </div>
  )
}

export default Card
