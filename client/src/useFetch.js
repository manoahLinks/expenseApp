import { useState, useEffect } from 'react'
import { useAuthContext } from './hooks/useAuthContext'

const useFetch = (url) => {

    const [result, setResult] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {user} = useAuthContext()

    useEffect(()=>{
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