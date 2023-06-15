import React from 'react'

async function FetchCall(url,options) {
  const result = await fetch(url,options)
  const fetchedData = await result.json()
  return fetchedData
  // setData(fetchedData)
  
}

export default FetchCall
