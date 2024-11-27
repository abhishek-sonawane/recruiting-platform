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
import WithSidebar from './Components/layout/WithSidebar'
import { Toaster } from 'react-hot-toast'
import { useAppSelector } from './hooks/reduxHook'

function App() {
  const { setLoggedin, loggedIn } = useContext(GlobalContext)
  const userLoggedIn = useAppSelector(state => state?.User?.data)


  //   const [data,setData] = useState({})
  //   const {loggedIn,setLoggedin}  = useContext(GlobalContext)


  useEffect(() => {
    console.log('user logged in', userLoggedIn)
  }, [])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Toaster />
      <NavBar />
      <Routes>
        {/* <WithSidebar> */}
        <Route element={<WithSidebar />} >
          <Route exact path='/' element={<Feed />} />
          <Route path='/about' element={<About />} />
          <Route path='/job/:jobID' element={<SingleJob />} />
          <Route path='/job/apply/:jobID' element={<ApplyToJob />} />
          {/* protected routes */}
          <Route element={<PrivateRoute />} >
            <Route path='admin/user/me' element={<UserDetails />} />
            <Route path='admin/job/post' element={<CreateJob />} />
            <Route path='admin/recruiter/dashboard' element={<Dashboard />} />
            <Route />
          </Route>
        </Route>
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route exact path='/admin' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
