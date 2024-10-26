import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const ToastContext = createContext("")

export const useToast = ()=>useContext(ToastContext)

export default function ToastProvider({children}) {
    const [toast,setToast] = useState([])

    const open = (component, timeout=5000)=>{
        const id = Date.now()
            setToast(toast=>[...toast,{id,component}])
            setTimeout(()=>{
                close(id)
            },timeout)
    }
    const close = (id)=>{
        setToast((toast)=>toast.filter(toast=>{toast.id!==id}))
    }

  return (
   <ToastContext.Provider value={{open}}>
        {children}
        <div>
       {toast&& toast.map(({id,component})=>{
          return (
            <div key={id} className="toast toast-top toast-center">
            {component}
      </div>
          )
       })}
        </div>
   </ToastContext.Provider>
  )
}

