import { useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import SupplierTable from "./components/SupplierTable";

const SupplierList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/supplier`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, user])

    return ( 
        <div className="grid grid-cols-1 m-2">
            {data && <SupplierTable suppliers={data}/>}
        </div>
     );
}
 
export default SupplierList;