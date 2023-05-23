import { useState, useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import {format} from "date-fns"
import ErrorPage from "../../../components/ErrorPage";

const ProductionRecordTable = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/production-record`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(!response.ok){
                setIsLoading(false)
                setError(true)
            }

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
                setIsLoading(false)
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, user, data])

    return ( 
        <div className="flex flex-col gap-y-2 md:p-5 p-2">
            <div className="grid md:grid-cols-5 p-2 grid-cols-2">
                <h4 className="">Date</h4>
                <h4 className="hidden md:block">Product</h4>
                <h4 className="hidden md:block">Bags</h4>
                <h4>loaves yield</h4>
                <h4>view transaction</h4>
            </div>
            <hr />
            {data ? data.map((record)=>(
                <div key={record._id} className="grid md:grid-cols-5 p-2 grid-cols-2">  
                        <h4>{format(new Date(record.createdAt), 'dd MMM yyyy')}</h4>
                        <h4>{record.product.name}</h4>
                        <h4>{record.bags}</h4>
                        <h4>{record.panCount}</h4>
                        <h4></h4>
                </div>
            )) : <h4>fetching...</h4>}

            {error && <ErrorPage/>}
        </div>
     );
}
 
export default ProductionRecordTable;