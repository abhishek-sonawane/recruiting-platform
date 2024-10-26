import React, { useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi'

function SearchBar({findQuery,query}) {
  const queryHandler=(e)=>{
   findQuery(e.target.value)
  }
  return (
    <div className='flex items-center justify-center'>
        <form className=' w-fit md:w-full max-w-xl relative'> 
            <input type="text" value={query} onChange={(e)=>queryHandler(e)} placeholder='Search for jobs...' className=' input-field w-full max-w-lg' name="search" id="search" />
            < BiSearchAlt fontSize='1.5rem' className=' absolute right-14 bottom-3 text-slate-500' />
        </form>
    </div>
  )
}

export default SearchBar
