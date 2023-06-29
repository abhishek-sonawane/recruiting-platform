import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { getJobs } from '../services/APIcalls/jobs'
import getCookie from '../utils/FindCookie'
import GlobalContext from '../context/GlobalContext'
import SearchBar from './SearchBar'
import SideBar from './SideBar'

function Feed() {

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
    <div>
      <SideBar />

    <SearchBar/>  

   <div className='flex flex-col gap-7 p-7'>
   {data.length>0&&data.map(item=>{
      return <Card key={item._id} details = {item} />
    })}
   </div>
  </div>
  )
}

export default Feed
