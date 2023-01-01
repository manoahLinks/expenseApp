import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [result, setResult] = useState('')
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

       fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error('error loading resource')
            }
            return res.json()
        })
        .then((data)=>{
            setResult(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err)=>{
            setIsPending(false)
            console.log('error is here')
            setError(err.message)
        })
        
    }, [url])

    return {result, isPending, error}

}

export default useFetch;