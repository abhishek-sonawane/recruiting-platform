import { createContext } from "react";
import { useState  } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

 const GlobalContext = createContext("")

export const ContextProvider = ({children})=>{
    const [loggedIn,setLoggedin] = useLocalStorage('loggedinState',false)
    const [userData,setUserData] = useLocalStorage('userData',{})

    return(
    <GlobalContext.Provider value={{loggedIn,setLoggedin,userData,setUserData}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext;