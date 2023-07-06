import { createContext } from "react";
import { useState  } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

 const GlobalContext = createContext("")

export const ContextProvider = ({children})=>{
    const [loggedIn,setLoggedin] = useLocalStorage('loggedinState',true)

    return(
    <GlobalContext.Provider value={{loggedIn,setLoggedin}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext;