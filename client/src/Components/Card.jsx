import React from 'react'

function Card({details}) {
  return (
    <div className='p-7 border text-left rounded-xl'>
      <p className=' text-2xl py-7'>{details.title}</p>
      <p className=' max-w-xl'>{details.description}</p>
    </div>
  )
}

export default Card
