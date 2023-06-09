import React from 'react'
import Card from './Card'

function Feed({data}) {
  return (
    <div>
    <p className=' font-mono font-bold text-4xl text-red-400' >Angel co</p>
   <div className='flex flex-col gap-7 p-7'>
   {data.length>0&&data.map(item=>{
      return <Card details = {item} />
    })}
   </div>
  </div>
  )
}

export default Feed
