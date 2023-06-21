import { createContext } from "react";
import { useState  } from "react";

 const GlobalContext = createContext("")

export const ContextProvider = ({children})=>{
    const [loggedIn,setLoggedin] = useState(false)

    return(
    <GlobalContext.Provider value={{loggedIn,setLoggedin}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext;