export const postLogoutFromServer =async()=>{
    const options  ={
        method:'POST',
        credentials:'include'
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/user/user/logout`,options)

    const data = await res.json()

    return data
}

