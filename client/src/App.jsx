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
import { useEffect } from 'react'


function App() {

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
const mycomp = (
  <p>hello world</p>
)
useEffect(()=>{
  console.log(mycomp)
},[])
  
  return (
     <BrowserRouter>
     <SideBar />
    <NavBar  />
        <Routes>
          <Route exact path='/' element={  <Feed/>}  />
          {/* protected routes */}
          <Route element={<PrivateRoute />} >
            <Route path='/user/me' element={<UserDetails/>}  />
            <Route path='/job/post' element={<CreateJob/>}/>
            <Route path='/recruiter/dashboard'  element={<Dashboard/>} />
            <Route />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route path='/about' element={<About/>} />
          <Route path='/job/:jobID' element={<SingleJob/>} />
          <Route path='/job/apply/:jobID' element={<ApplyToJob/>} />
          {/* <Route path='/*' element={<ErrorPage />}  /> */}
          <Route path='/404' element={<ErrorPage />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App
