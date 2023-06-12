import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiUser } from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
function NavBar() {
  return (
    <div>
      <ul className='flex flex-row items-center  gap-5 md:gap-16 text-slate-500 text-lg font-medium justify-end p-4'>
        <li> 
            <NavLink to='/'>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about'>
            about
            </NavLink>
        </li>
        <li>
            <NavLink to='/login'>
                Login 
            </NavLink>
        </li>

        <li>
          <NavLink to='/me'>
      <FaUserCircle fontSize='1.5em' />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
