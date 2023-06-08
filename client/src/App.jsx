import { useState,useEffect } from 'react'
import './App.css'

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
    <div>
      <p className=' font-mono font-bold text-4xl text-red-400' >hello client</p>
      {data.length>0&&data.map(item=>{
        return <p>{item.title}</p>
      })}
    </div>
  )
}

export default App
