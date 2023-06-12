import { useState,useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'
import Login from './Components/Login'
import NavBar from './Components/NavBar'

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
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route  exact path='/' element={  <Feed data={data} />}  />
          <Route exact path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
