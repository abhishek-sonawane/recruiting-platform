import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
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

  const getPdfPath = (item)=>{
    console.log(item.split('/')[2])
      return item.split('/')[2]
      
  }
  return (
    <div className=' border border-slate-300 p-10 w-full max-w-md' >
        <p>{item.name}</p>
        <p>{item.email}</p>
        <br />
        <button  className='px-5 text-white rounded-lg py-3 bg-red-300' >
               <a target="_blank" href={`${import.meta.env.VITE_BACKEND_ENDPOINT}/file/${getPdfPath(item.cvPDF.path.replace(/\\/g, "/"))}`}> view pdf</a>
        </button> 
        <p>{item.cvPDF.path.replace(/\\/g, "/")}</p>

    </div>
  )
}

export default ApplicationCard
