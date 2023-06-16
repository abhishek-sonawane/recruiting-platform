import { useState,useEffect,useContext } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import SingleJob from './Components/SingleJob'
import ErrorPage from './Components/ErrorPage'
import PrivateRoute from './Components/PrivateRoute'
import UserDetails from './Components/UserDetails'
// import {ContextProvider} from './context/GlobalContext.jsx'
import GlobalContext from './context/GlobalContext.jsx'
import FetchCall from './utils/FetchCalls'
import getCookie from './utils/FindCookie'


function App() {

  const [data,setData] = useState({})
  const {loggedIn,setLoggedin}  = useContext(GlobalContext)
 

  useEffect(()=>{
   const getData = async()=>{
    const resultData = await FetchCall('http://localhost:3000/',{mode: 'cors',
    credentials: 'include'})
    setData(resultData)
   }
   getData()
   if(getCookie('jwt')!=''){
    setLoggedin(true)
}
  },[])

  
  return (
     <BrowserRouter>
    <NavBar  />
        <Routes>
          <Route exact path='/' element={  <Feed data={data} />}  />
          <Route element={<PrivateRoute />} >
            <Route path='/user/me' element={<UserDetails/>}  />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route path='/job/:jobID' element={<SingleJob/>} />
          <Route path='/*' element={<ErrorPage />}  />
          <Route path='/404' element={<ErrorPage />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App
