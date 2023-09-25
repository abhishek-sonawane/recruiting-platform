export const postLogoutFromServer =async()=>{
    const options  ={
        method:'POST',
        credentials:'include'
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/user/user/logout`,options)

    const data = await res.json()

    return data
}

export const loginUser = async(username,password)=>{
    try {
        const options  = {
            method:'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({username:username,password:password})
        }
        const result =  await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/login`,options)
        const data = await result.json()
        return {result,data}
    } catch (error) {
        console.log('Error logging in the User ::loginUser::',error.message)
    }
}