import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"

const useFetch = (url) => {

    const {user} = useAuthContext()
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{

        fetch(url, {
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        }).then((res)=>{
            if(!res.ok){
                throw Error(`no valid response from this resource`)
            }
            return res.json()

        }).then((data)=>{

            setData(data)
            setError(null)
            setIsPending(null)

        }).catch((error)=>{
            setError(error.message)
        })
     
    }, [url])
    
    return {data, isPending, error}
}

export default useFetch;