import {useState, useEffect} from "react"

const useFetch = (url) => {

    const [result, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then((res)=>{
                    if(!res.ok){
                        throw Error('could not fetch data for the resource')
                    }
                    return res.json()
                })
                .then((result)=>{
                    setData(result)
                    setIsPending(false)
                    setError(null) 
                })
                .catch((err)=>{
                    setIsPending(false)
                    setError(err.message)
                })    
        }, 1000)
        
    }, [url])
    

    return {result, isPending, error}
}


export default useFetch;