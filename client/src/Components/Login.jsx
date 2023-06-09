import React, { useState } from 'react'

function Login() {

        const [username,setusername] = useState('')
        const [password, setPassword] = useState('')


    const loginFormSubmit =(e)=>{
        e.preventDefault()
        // console.log('h')
        postUser(   )
    }

    const postUser = async()=>{
        const options  = {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({username:username,password:password})
        }
        const result =  await fetch('http://localhost:3000/login',options)
        console.log(result)
        const data = await result.json()
        console.log(data)
    }

  return (
    <div className='form flex justify-center items-center h-screen  '>  
        <form className='flex flex-col gap-6 bg-white rounded-xl drop-shadow-2xl p-20' onSubmit={loginFormSubmit} >

            <h2 className='text-3xl font-medium py-7 px-10' >Login to continue</h2>
            <input value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' className=' input-field' type="text" name="username" id="username" />

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className=' input-field' type="password" name="password" id="password" />

            <button className='p-3 bg-slate-800 rounded-lg text-white font-semibold text-xl' >login</button>
        </form>
    </div>
  )
}

export default Login
