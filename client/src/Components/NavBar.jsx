import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import GlobalContext from '../context/GlobalContext'
import { useContext } from 'react'
function NavBar() {

  const {loggedIn} = useContext(GlobalContext)
  return (
    <div >

      <ul className='flex flex-row items-center  gap-5 md:gap-16 text-slate-500 text-lg font-medium justify-end p-4'>
        {/* <li>
            <NavLink to='/about'>
            about
            </NavLink>
        </li>
        <li className='bg-slate-200 p-2 rounded-lg'>
            <NavLink to='/job/post'>
            Post Job
            </NavLink>
        </li> */}
        {loggedIn?
    <li>
      <NavLink to='/user/me'>
  <FaUserCircle fontSize='1.5em' />
      </NavLink>
    </li>  :
     <li>
     <NavLink to='/login'>
         Login 
     </NavLink>
 </li>
      }
      </ul>
    </div>
  )
}

export default NavBar
