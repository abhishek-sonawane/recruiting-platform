import React, { useEffect,useContext, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { Navigate,useLocation } from 'react-router-dom'
import getCookie, { getUserIdFromCookie } from '../utils/FindCookie'
import GlobalContext from '../context/GlobalContext'

function PrivateRoute() {
    // let state = false
    const location = useLocation()
    const {loggedIn,setLoggedin} = useContext(GlobalContext)
    const [userId , setUserId] = useState('')
    
    useEffect(()=>{
        // if(getCookie('jwt')!==''){
        //     console.log('hitting the condition')
        //     console.log(` from the if statement of private route ${getCookie('jwt')}`)
        //     // setLoggedin(true)
        //     console.log(localStorage.getItem('loggedinState'))}
        //    if( localStorage.getItem('loggedinState')==null){
        //        localStorage.setItem('loggedinState',true)
        //     }
        //     // const userid = getUserIdFromCookie(getCookie('jwt'))
        //     // console.log(userid)
        //     // setUserId(userid)
        // else{
        //     setLoggedin(false)
        //     return
        // }
       
    },[])


          return  loggedIn ? <Outlet userid={userId} /> : (<Navigate to='/admin' state={{location}} replace />)

}

export default PrivateRoute
