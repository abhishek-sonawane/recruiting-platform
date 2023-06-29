import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function UserDetails({userid}) {
  useEffect(()=>{
    console.log(userid)
    

  },[])

  const navigate = useNavigate()
  const logoutHander = ()=>{
      localStorage.removeItem('loggedinState')
  }
  return (
    <div>
     user details
    <p> user id : {userid}</p>

     <button onClick={()=>logoutHander()} className='p-3 bg-red-400 rounded-lg text-white font-semibold text-xl px-4 py-2' >logout</button>
    </div>
  )
}

export default UserDetails
