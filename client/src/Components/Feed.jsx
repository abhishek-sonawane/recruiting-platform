import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { getJobs } from '../services/APIcalls/jobs'
import getCookie from '../utils/FindCookie'
import GlobalContext from '../context/GlobalContext'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import { setInitialJobs } from '../slices/JobsSlice'
import {useDispatch,useSelector} from 'react-redux'


function Feed() {

  const [query,setQuery] = useState('')

  const findQuery =(data)=>{
    setQuery(data)
  }

  const dispatch = useDispatch()
  const data = useSelector((state)=>state.setJobs)
  const filteredData = data.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase().trim()) || item.description.toLowerCase().includes(query.toLowerCase().trim()))
   
  // const [data,setData] = useState([])
  const {loggedIn,setLoggedin}  = useContext(GlobalContext)
 

  useEffect(()=>{
   const getData = async()=>{
     const data = await getJobs()
     
     console.log('getdata fn ::',data)
     dispatch(setInitialJobs(data))
     document.title = 'Jobs'
   }
   getData()
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
