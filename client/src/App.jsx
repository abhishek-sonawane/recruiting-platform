import { useState,useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import SingleJob from './Components/SingleJob'
import ErrorPage from './Components/ErrorPage'
import {ContextProvider} from './context/GlobalContext.jsx'


function App() {

  const [data,setData] = useState({})

  const getData = async()=>{
    const result = await fetch('http://localhost:3000/')
    const fetchedData = await result.json()
    setData(fetchedData)
  }

  useEffect(()=>{
    getData()

  },[])

  
  return (
   <ContextProvider>
     <BrowserRouter>
    <NavBar  />
        <Routes>
          <Route exact path='/' element={  <Feed data={data} />}  />
          <Route exact path='/login' element={<Login />} />
          <Route path='/job/:jobID' element={<SingleJob/>} />
          <Route path='/*' element={<ErrorPage />}  />
          <Route path='/404' element={<ErrorPage />}  />
        </Routes>
    </BrowserRouter>
   </ContextProvider>
  )
}

export default App
