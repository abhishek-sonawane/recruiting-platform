import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import getCookie from '../utils/FindCookie'

function PrivateRoute() {
    let state = true
    useEffect(()=>{
       
    },[])
    return (

        <div>
            {state ?
                <Outlet />
                :
                <>login first</>}
        </div>
    )
}

export default PrivateRoute
