function getCookie(name) {
  // console.log(name)
    const value = `; ${document.cookie}`;
    // console.log(value)
    const parts = value.split(`; ${name}=`);
    // console.log(parts)
    if (parts.length === 2) return parts.pop().split(';').shift();
    else return ''
  }

  export const getUserIdFromCookie=(token)=>{
      if (!token) {
        return;
      }
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
  }

  export default getCookie
  