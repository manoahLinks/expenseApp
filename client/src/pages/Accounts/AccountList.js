import React, { useEffect, useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import AccountTable from "./components/AccountTable";
import AccountDetails from "./AccountDetails";

const AccountList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()
    const [selectedData, setSelectedData] = useState(null)

    const modalOn = async (data) => {

        const response = await fetch(`http://localhost:5500/api/account/${data._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            setSelectedData({...data, json})
        }
    }

    const modalOff = () =>{
        setSelectedData(null)
    }

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://smartwork-api.onrender.com/api/account`, {
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
        
    }, [dispatch, data, user])

    return ( 
        <div className="grid grid-cols-1">
            {data && <AccountTable accounts={data} modalOn={modalOn} />}
            {selectedData && <AccountDetails account={selectedData} modalOff={modalOff} />}
        </div>
     );
}
 
export default AccountList;