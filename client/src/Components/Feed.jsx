import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { getJobs } from '../services/APIcalls/jobs'
import getCookie from '../utils/FindCookie'
import GlobalContext from '../context/GlobalContext'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
// import { setInitialJobs } from '../slices/JobsSlice'
import { getInitialJobs } from '../slices/JobsSlice'
import {useDispatch,useSelector} from 'react-redux'


function Feed() {

  const dispatch = useDispatch()
  const [query,setQuery] = useState('')
  const data = useSelector((state)=>state.jobs.listOfJobs)

  const findQuery =(data)=>{
    setQuery(data)
  }
  const filteredData = data.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase().trim()) || item.description.toLowerCase().includes(query.toLowerCase().trim()))
   


  // const [data,setData] = useState([])
  const {loggedIn,setLoggedin}  = useContext(GlobalContext)
 

  useEffect(()=>{
    dispatch(getInitialJobs())
  },[])

  return (
    <div>
      {/* <SideBar /> */}

    <SearchBar findQuery={findQuery} query={query} />  

   <div className='flex flex-col gap-7 p-7'>
    {console.log(data)}
   {filteredData&&filteredData.map(item=>{
      return <Card key={item._id} details = {item} />
    })}
   </div>
  </div>
  )
}

export default Feed
