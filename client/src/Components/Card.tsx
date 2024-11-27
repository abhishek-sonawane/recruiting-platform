import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdWorkHistory } from 'react-icons/md'
import { FaRegBookmark } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";



interface detailType {
  _id: string,
  title: string,
  createdAt: string,
  experience: string

}
interface detailProp {
  details: detailType
}

function Card({ details }: detailProp) {
  console.log('details', details)
  const navigate = useNavigate()
  return (
    <div className='p-5 flex flex-row border border-slate-200 text-left rounded-2xl font-bold text-slate-900'>
      <div className='flex flex-col flex-1'>
        <p className=' text-2xl font-semibold pb-5'>
          Dummy Text
          {/* {details.title} */}
        </p>
        <div className='flex flex-row items-center justify-start gap-9' >

          <p className='text-gray-600 flex flex-row items-center gap-1 font-medium '>

            <RiMoneyDollarBoxLine /> 50k-80k
          </p>

          <p className='text-gray-600 flex flex-row items-center gap-1 font-medium '>

            <CiLocationOn /> Mumbai
          </p>

          {/* <p className='text-gray-500 font-medium flex flex-row items-center gap-2 py-2' >
            <MdWorkHistory />
            {details?.experience || '0-1 Years'}

          </p> */}
          {/* <p className=' max-w-xl  text-gray-500 font-medium '>{details.description}</p> */}
        </div>
      </div >
      <div className='flex gap-2' >
        {/* <button className="btn btn-outline"> */}
        <p className='text-gray-600 h-fit mx-4 font-medium p-2 px-4 border bg-gray-200 rounded-3xl'>{details.createdAt && new Date(details.createdAt).toLocaleString().split(',')[0]}
        </p>
        <button className='btn'>
          <FaRegBookmark />
        </button>
        {/* </button> */}
        <button onClick={() => navigate(`/job/${details._id}`)} className="btn btn-outline">Apply</button>
      </div>
    </div>
  )
}

export default Card
