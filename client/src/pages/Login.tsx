import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import getCookie, { getUserIdFromCookie } from '../utils/FindCookie'
import FetchCall from '../utils/FetchCalls'
import { loginUser } from '../services/APIcalls/user'
import { useToast } from '../context/ToastContext'

function Login() {
    useEffect(()=>{
    
    },[])
        const {setLoggedin ,loggedIn,userData,setUserData} = useContext(GlobalContext)   
        const [username,setusername] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate()  
        const toast = useToast();


    const loginFormSubmit =(e)=>{
        e.preventDefault()
        postUser()
    }

    const postUser = async()=>{
        const {result,data} = await loginUser(username,password)
        console.log('result',data)
        setUserData(data)
        // localStorage.setItem('token',data.token)
        if(result.status===200){
            setLoggedin(true) 
          return  navigate('/')
        }
        return toast.open(
            <div className="alert alert-success bg-red-500">
              <span>something went wrong. Check your username and password again.</span>
            </div>
          );
    }

  return (
    <div className=' grid place-items-center p-12 mt-11'>  
        <form className='flex flex-col gap-6 bg-white rounded-xl w-full drop-shadow-2xl p-20 max-w-xl' onSubmit={loginFormSubmit} >

            <h2 className='text-3xl font-bold py-7 text-center' >Login to continue</h2>
            <input value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' className=' input-field w-full' type="text" name="username" id="username" />

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className=' input-field w-full' type="password" name="password" id="password" />
            {/* <input/ */}
            <button disabled={(!username.trim()) || (!password.trim())} className={`p-3 bg-red-400 rounded-lg text-white font-semibold text-xl w-full ${(!username.trim()) || (!password.trim())? 'bg-gray-400':'bg-red-400'} `} >login</button>
        </form>
    </div>
  )
}

export default Login
