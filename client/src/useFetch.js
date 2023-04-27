import { useState, useEffect } from 'react'
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from "./hooks/useLogout";

const useFetch = (url) => {

    const {logOut} = useLogout()
    const [result, setResult] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {user} = useAuthContext()

    useEffect(()=>{

        if(user.decodedToken.exp < Date.now() / 1000){
            logOut()
        }

       fetch(url, {
        headers:{
            'Authorization': `Bearer ${user.token}`
        }
       })
            .then((res)=>{
                if(!res.ok){
                    throw Error('error loading resource')
                }
                return res.json()
            })
            .then((data)=>{
                if(user){
                    setResult(data)
                }
                setIsPending(false)
                setError(null)
            })
            .catch((err)=>{
                setIsPending(false)
                setError(err.message)
            })
        
    }, [url, user])

    return {result, isPending, error}

}

export default useFetch;