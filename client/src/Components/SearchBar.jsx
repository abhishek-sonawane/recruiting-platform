import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
        <form className=' w-full max-w-xl relative' > 
            <input type="text" placeholder='Search for jobs...' className=' input-field w-full max-w-lg' name="search" id="search" />
            < BiSearchAlt fontSize='1.5rem' className=' absolute right-14 bottom-3 text-slate-500' />
        </form>
    </div>
  )
}

export default SearchBar
