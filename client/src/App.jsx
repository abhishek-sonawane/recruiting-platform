import { useState,useEffect,useContext } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'
import Login from './pages/Login'
import NavBar from './Components/NavBar'
import SingleJob from './pages/SingleJob'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from './Components/PrivateRoute'
import UserDetails from './pages/UserDetails'
// import {ContextProvider} from './context/GlobalContext.jsx'
import GlobalContext from './context/GlobalContext.jsx'
import getCookie from './utils/FindCookie'
import CreateJob from './pages/CreateJob'
import { getJobs } from './services/APIcalls/jobs'
import ApplyToJob from './pages/ApplyToJob'


function App() {

  const [data,setData] = useState({})
  const {loggedIn,setLoggedin}  = useContext(GlobalContext)
 

  useEffect(()=>{
   const getData = async()=>{
    const data = await getJobs()
    setData(data)
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
            <Route path='/job/post' element={<CreateJob/>}/>
            <Route />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route path='/job/:jobID' element={<SingleJob/>} />
          <Route path='/job/apply/:jobID' element={<ApplyToJob/>} />
          <Route path='/*' element={<ErrorPage />}  />
          <Route path='/404' element={<ErrorPage />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App
