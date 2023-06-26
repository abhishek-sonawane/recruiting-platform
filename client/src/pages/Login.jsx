import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import getCookie from '../utils/FindCookie'
import FetchCall from '../utils/FetchCalls'

function Login() {
    useEffect(()=>{
        console.log(getCookie("jwt"))
    },[])
        const {setLoggedin ,loggedIn} = useContext(GlobalContext)   
        const [username,setusername] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate()

    const loginFormSubmit =(e)=>{
        e.preventDefault()
        postUser()
    }

    const postUser = async()=>{
        const options  = {
            method:'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({username:username,password:password})
        }
        const result =  await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/login`,options)
        console.log(result)
        console.log(result.status)
        const data = await result.json()
        console.log(data)
        if(result.status===200){
            navigate('/')
        
            if(getCookie('jwt')!=''){
            setLoggedin(true)
            }

            
        }
    }

  return (
    <div className=' grid place-items-center p-12 mt-11'>  
        <form className='flex flex-col gap-6 bg-white rounded-xl w-full drop-shadow-2xl p-20 max-w-xl' onSubmit={loginFormSubmit} >

            <h2 className='text-3xl font-bold py-7 text-center' >Login to continue</h2>
            <input value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' className=' input-field w-full' type="text" name="username" id="username" />

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className=' input-field w-full' type="password" name="password" id="password" />
            <input onFocus={()=>console.log('focused')} onBlur={()=>console.log('blurred')}  />
            <button className='p-3 bg-red-400 rounded-lg text-white font-semibold text-xl w-full' >login</button>
        </form>
    </div>
  )
}

export default Login