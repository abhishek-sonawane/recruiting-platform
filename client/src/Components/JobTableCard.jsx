import React, { useState } from 'react'
import { postDeleteJob, postEditJob } from '../services/APIcalls/jobs'

function JobTableCard({applications,setApplications,jobs, setJobs,item}) {

    const [title,setTitle] = useState(item.title)
    const [description,setDescription] = useState(item.description)
    const [editToggle, setEditToggle] = useState(false)

    const editButtonHandler = (id)=>{
        alert('edit') 
        setEditToggle(true)
        

    }

    const deleteButtonHandler =async(id)=>{
      const confirm = window.confirm('are you sure you want to delete this ?')
      if(confirm){
        const dat = await postDeleteJob(id)
     setJobs(()=>jobs.filter((item)=>item._id !== id))
      }else return null
    }

    const saveButtonHandler =(id)=>{
        setEditToggle(false)
        postEditJob(id,title,description)
    }
 if(editToggle){
    return (
        <div className={editToggle?'bg-slate-400':''}>
            <div className=' p-4 border flex flex-row gap-9 justify-start content-start text-left' >
              <input className=' p-2  w-1/4' value={title} onInput={(e)=>setTitle(e.target.value)} />
              <input className=' p-2 w-1/3 ml-9 overflow-hidden whitespace-nowrap  overflow-ellipsis' value={description} onInput={(e)=>setDescription(e.target.value)} />
            {editToggle? 
            <button onClick={()=>saveButtonHandler(item._id)} className='px-5 py-1 text-md text-white font-semibold bg-yellow-400 rounded-xl' >save</button>
            :
            <button onClick={()=>editButtonHandler()} className='px-5 py-1 text-md text-white font-semibold bg-red-400 rounded-xl' >edit</button>}
              <button onClick={()=>deleteButtonHandler(item._id)} className='px-5 py-1 text-md text-white font-semibold bg-red-400 rounded-xl' >delete</button>
              
            </div>
        </div>
      )
 }
 else {
    return (  
        <div>
            <div className=' p-4 border flex flex-row gap-9 justify-start content-start text-left' >
              <p className=' w-1/4' >{title}</p>
              <p className=' w-1/3 ml-9 overflow-hidden whitespace-nowrap  overflow-ellipsis' >{description}</p>
              <button onClick={()=>editButtonHandler()} className='px-5 py-1 text-md text-white font-semibold bg-red-400 rounded-xl h-min' >edit</button>
              <button onClick={()=>deleteButtonHandler(item._id)} className='px-5 py-1 text-md text-white font-semibold bg-red-400 rounded-xl h-min' >delete</button>
            </div>
        </div>
      )
 }
}

export default JobTableCard
