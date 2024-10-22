import { useState, useEffect } from "react";
import getCookie from "../utils/FindCookie";

function useCookie() {
    const [loggedin, setLoggedin] = useState(false);
  
    useEffect(() => {
      if (getCookie('jwt') !== '') {
        setLoggedin(true);
      }
    }, []);
  
    return loggedin;
  }


  export default useCookie ;