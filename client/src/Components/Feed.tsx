import React, { useEffect, useState } from 'react'
import Card from './Card'
import SearchBar from './SearchBar'
import { getInitialJobs } from '../redux/thunks/jobThunk'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'


function Feed() {


  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const data: jobObject[] = useAppSelector((state) => state.jobs.listOfJobs)
  const loading: boolean = useAppSelector((state) => state.User.loading)
  // const loading = true
  const findQuery = (data: string) => {
    setQuery(data)
  }


  const filteredData = data?.filter(
    (item) => {
      return item?.title.toLowerCase().includes(query.toLowerCase().trim())
        ||
        item?.description.toLowerCase().includes(query.toLowerCase().trim())
    })

  useEffect(() => {
    dispatch(getInitialJobs())
  }, [])

  if (loading) {
    return (
      <div className='w-full h-[100vh] flex justify-center items-center' >
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div>
      {/* <SideBar /> */}

      <SearchBar findQuery={findQuery} query={query} />
      <div className='flex flex-col gap-7 p-7'>
        {filteredData && filteredData.map(item => {
          return <Card key={item._id} details={item} />
        })}
      </div>
    </div>
  )
}

export default Feed
