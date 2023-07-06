import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { postLogoutFromServer } from '../services/APIcalls/user'
import GlobalContext from '../context/GlobalContext'
function UserDetails({userid}) {
  useEffect(()=>{
    console.log(userid)
    

  },[])

  const {loggedIn,setLoggedin} = useContext(GlobalContext)
  const navigate = useNavigate()
  const logoutHander = async()=>{
    const dat = await postLogoutFromServer()
    console.log(dat)
    setLoggedin(false)
      navigate('/login')
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
