import React, { useEffect,useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate,useLocation } from 'react-router-dom'
import getCookie from '../utils/FindCookie'
import GlobalContext from '../context/GlobalContext'

function PrivateRoute() {
    // let state = false
    const location = useLocation()
    const {loggedIn,setLoggedin} = useContext(GlobalContext)
    
    useEffect(()=>{
        if(getCookie('jwt')!=''){
            setLoggedin(true)
        }
       
    },[])
    return (

        <div>
            {loggedIn ?
                <Outlet />
                :
                <Navigate to='/login' state={{location}} replace />}
        </div>
    )
}

export default PrivateRoute
