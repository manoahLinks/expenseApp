import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import SalesTransactionTable from "./components/SalesTransactionTable"

const SalesList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=> {

        const fetchData = async() => {
            let response = await fetch(`http://localhost:5500/api/sales-transaction/`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(!response.ok){
                console.log('error')
            }

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }
        }
        if(user){
            fetchData()
        }
    })

    return ( 
        <div className="grid grid-cols-1">
            {data &&  <SalesTransactionTable transactions={data} />}
        </div>
     );
}
 
export default SalesList;