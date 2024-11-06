import React, { useEffect, useState } from 'react'
import Card from './Card'
import SearchBar from './SearchBar'
import { getInitialJobs } from '../thunks/jobThunk'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'


function Feed() {


  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const data: jobObject[] = useAppSelector((state) => state.jobs.listOfJobs)

  const findQuery = (data: string) => {
    setQuery(data)
  }


  const filteredData = data.filter(
    (item) => {
      return item?.title.toLowerCase().includes(query.toLowerCase().trim())
        ||
        item?.description.toLowerCase().includes(query.toLowerCase().trim())
    })

  useEffect(() => {
    dispatch(getInitialJobs())
  }, [])

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
