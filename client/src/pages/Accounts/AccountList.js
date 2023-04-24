import React, { useEffect, useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import AccountTable from "./components/AccountTable";
import AccountDetails from "./AccountDetails";
import AccountGrid from "./components/AccountGrid";

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
        
    }, [dispatch, data, user])

    return ( 
        <div className="grid grid-cols-1 p-2 md:p-5 md:gap-y-8 gap-y-4">
            <div className="grid grid-cols-3 md:gap-x-8 gap-x-4">
                <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2 border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-semibold">total rawmaterial</small>
                    </div>
                    {data && <h4 className="text-[30px] font-semibold text-slate-400">{data.length}</h4>}
                </div>
                <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2  border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-semibold">Stock transactions</small>
                    </div>
                    {data && <h4 className="text-[30px] font-semibold text-slate-400"></h4>}
                </div>
                <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2  border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-semibold">qty available</small>
                    </div>
                    {data && <h4 className="text-[30px] font-semibold text-slate-400"></h4>}
                </div>
            </div>
            {data && <AccountTable accounts={data} modalOn={modalOn} />}
            {data && <AccountGrid accounts={data} modalOn={modalOn} />}
            {selectedData && <AccountDetails account={selectedData} modalOff={modalOff} />}
        </div>
     );
}
 
export default AccountList;