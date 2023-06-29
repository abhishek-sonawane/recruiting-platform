import React from 'react'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`


function ApplicationCard({item}) {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(item)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className=' border border-slate-300 p-10 w-full max-w-md' >
        <p>{item.name}</p>
        <p>{item.email}</p>
        <br />
        <button  className='px-5 text-white rounded-lg py-3 bg-red-300' >view pdf</button>
        <p>{item.cvPDF.path.replace(/\\/g, "/")}</p>

        <Document onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess} file={`/${item.cvPDF.path.replace(/\\/g, "/")}`}>
            <Page pageNumber={pageNumber} />
        </Document>
    </div>
  )
}

export default ApplicationCard
