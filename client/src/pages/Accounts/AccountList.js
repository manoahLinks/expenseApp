import { useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import AccountTable from "./components/AccountTable";

const AccountList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/account`, {
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
        <div className="grid grid-cols-1">
            {data && <AccountTable accounts={data} />}
        </div>
     );
}
 
export default AccountList;