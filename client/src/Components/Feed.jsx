import React from 'react'
import Card from './Card'

function Feed({data}) {
  return (
    <div>
    <p className=' font-mono font-bold text-4xl text-red-400 p-6 ' >jobspire</p>
    
   <div className='flex flex-col gap-7 p-7'>
   {data.length>0&&data.map(item=>{
      return <Card key={item._id} details = {item} />
    })}
   </div>
  </div>
  )
}

export default Feed
