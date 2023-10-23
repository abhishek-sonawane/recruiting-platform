import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import { changeApplicationStatus } from '../services/APIcalls/jobs';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`


function ApplicationCard({item}) {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const[file,setFile] = useState()
  console.log(item)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const viewPdfHandle =async(fileName)=>{
    const dat = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/file/${fileName}`)
    console.log(dat)
    const result = await dat.json()

    console.log(result)
    return result
  }

  const applicationStatuses = ['applied','resume_viewed']
  const selectHandler = (e)=>{
      console.log('e',e.target.value)
      const newStatus = e.target.value 
      const appStatusMethod = async()=>{
        const id = item._id
       await changeApplicationStatus(id,newStatus)
      } 
      appStatusMethod()
  }

  const getPdfPath = (item)=>{
    console.log(item.split('/')[2])
      return item.split('/')[2]
      
  }
  return (
    <div className=' border border-slate-300 p-10 w-full max-w-md' >
        <div className='flex flex-row items-center gap-2' >
          <p>Name:</p>
        <p className='text-lg font-medium' >{item.name}</p>
        </div>

       <div className='flex flex-row items-center gap-2' >
        <p>Email: </p>
       <p className='text-lg font-medium'>{item.email}</p>
       </div>
        <p  className='flex '>Application Date : {new Date(item.createdAt).toLocaleString().split(',')[0]}</p>
        <br />
        {/* <p className='flex p-2'>Status: {item.status}</p> */}
        <select onChange={selectHandler} className="select select-bordered w-full mb-3 max-w-xs">
        {applicationStatuses &&applicationStatuses.map(ApplicationItem=>{
          if(ApplicationItem==item.status){
            return <option selected value={ApplicationItem}>{ApplicationItem}</option>
          }
          return <option value={ApplicationItem}>{ApplicationItem}</option>
        })}
</select>
        <button  className='px-5 text-white rounded-lg py-3 flex bg-red-400 font-bold' >
               <a target="_blank" href={`${import.meta.env.VITE_BACKEND_ENDPOINT}/file/${getPdfPath(item.cvPDF.path.replace(/\\/g, "/"))}`}> view Resume</a>
        </button> 
    </div>
  )
}

export default ApplicationCard
