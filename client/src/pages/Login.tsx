import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import getCookie, { getUserIdFromCookie } from '../utils/FindCookie'
import FetchCall from '../utils/FetchCalls'
import { loginUser } from '../services/APIcalls/user'
import { useToast } from '../context/ToastContext'
import pixelImage from '../assets/security.png'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { loginUserThunk } from '../redux/thunks/userThunk'

function Login() {
  const { setLoggedin, userData, setUserData } = useContext(GlobalContext)
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const User = useAppSelector(state => state.User)

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const customToast = useToast();
  const loggedIn = useAppSelector((state) => state.User.isLoggedIn);
  const loading = useAppSelector(state => state.User.loading)


  useEffect(() => {
    if (loggedIn) {
      navigate('/admin/recruiter/dashboard')
    }
  }, [])
  const loginFormSubmit = (e) => {
    e.preventDefault()
    postUser()
  }

  const postUser = async () => {
    try {
      // const { result, data } = await loginUser(username, password)
      const user = await dispatch(loginUserThunk({ username, password })).unwrap()
      console.log('result', user)
      // setUserData(data)
      // // localStorage.setItem('token',data.token)
      // if (result.status === 200) {
      //   setLoggedin(true)
      return navigate('/admin/recruiter/dashboard')

      // }
    } catch (error) {
      console.log('something went wrong,', error)
      return customToast.open(
        {
          type: 'error',
          text: error
        }
      );
    }

  }


  return (

    <div className='flex flex-row items-center justify-center p-12 mt-11 w-full h-full '>
      <img className='flex-1 w-full max-w-[500px] h-full' src={pixelImage} alt="" />
      <form className='flex-1 flex flex-col gap-4 bg-white rounded-xl w-full  p-20 max-w-xl' onSubmit={loginFormSubmit} >

        <h1 className=' font-poppinsBold text-4xl font-bold text-center' >Login as admin</h1>
        <h1 className='  text-md text-gray-400 text-center' >enter your details</h1>
        <div className='flex flex-col gap-2' >
          <label className=' text-left text-lg' htmlFor="username">username</label>
          <input value={username} onChange={(e) => setusername(e.target.value)} className=' bg-gray-100  px-3 rounded-xl  py-3 border-none w-full focus:bg-white' id="username" placeholder='John carter' />
        </div>

        <div className='flex flex-col gap-2' >
          <label className=' text-left text-lg' htmlFor="password">password</label>
          <span className='flex relative flex-row' >
            {/* TODO create custom text input component */}
            <input value={password} onChange={(e) => setPassword(e.target.value)} className=' relative bg-gray-100  px-3 rounded-xl  py-3 border-none w-full focus:bg-white' type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='example@gmail.com' />

            <button type='button' className='absolute top-3 right-5  '
              onClick={() => setShowPassword(prev => !prev)} >{showPassword ? <VscEyeClosed size={21} /> : <VscEye size={21} />}
            </button>
          </span>
        </div>
        {/* <input/ */}

        {/* TODO create custom button component */}
        <button disabled={(!username.trim()) || (!password.trim())} className={`p-3 bg-[#d2f091] mt-4 rounded-xl text-black font-bold text-xl w-full ${(!username.trim()) || (!password.trim()) ? 'bg-gray-400 text-white' : ' bg-[#d2f091]'} `} >
          {loading ?
            <span className="loading loading-dots loading-lg"></span>

            :
            <p className='
      text-white
        drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
        ' >Log In
            </p>}
        </button>
      </form>
    </div>
  )
}

export default Login
