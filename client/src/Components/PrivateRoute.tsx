import React, { useEffect, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate, useLocation } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../hooks/reduxHook'

function PrivateRoute() {
    // let state = false
    const location = useLocation()
    // const { loggedIn } = useContext(GlobalContext)
    const loggedIn = useAppSelector(state => state.User.isLoggedIn)
    const [userId] = useState('')

    useEffect(() => {
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

    }, [])


    return loggedIn ? <Outlet userid={userId} /> : (<Navigate to='/admin' state={{ location }} replace />)

}

export default PrivateRoute
