import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'
import Login from './pages/Login'
import NavBar from './Components/NavBar'
import SingleJob from './pages/SingleJob'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from './Components/PrivateRoute'
import UserDetails from './pages/UserDetails'
import CreateJob from './pages/CreateJob'
import ApplyToJob from './pages/ApplyToJob'
import SideBar from './Components/SideBar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import GlobalContext from './context/GlobalContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { setLoggedin, loggedIn } = useContext(GlobalContext)


  //   const [data,setData] = useState({})
  //   const {loggedIn,setLoggedin}  = useContext(GlobalContext)


  //   useEffect(()=>{
  //    const getData = async()=>{
  //     const data = await getJobs()
  //     setData(data)
  //    }
  //    getData()
  //    if(getCookie('jwt')!=''){
  //     setLoggedin(true)
  // }
  //   },[])

  return (
    <BrowserRouter>
      <ToastContainer />
      <SideBar />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        {/* protected routes */}
        <Route element={<PrivateRoute />} >
          <Route path='admin/user/me' element={<UserDetails />} />
          <Route path='admin/job/post' element={<CreateJob />} />
          <Route path='admin/recruiter/dashboard' element={<Dashboard />} />
          <Route />
        </Route>
        <Route exact path='/admin' element={loggedIn ? <Dashboard /> : <Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/job/:jobID' element={<SingleJob />} />
        <Route path='/job/apply/:jobID' element={<ApplyToJob />} />
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
