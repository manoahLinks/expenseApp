import React, { useEffect, useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import SupplierTable from "./components/SupplierTable";
import SupplierDetails from "./SupplierDetails";
import SuppliersGrid from "./components/SuppliersGrid";
import LoadingPage from "../../components/Loading";

const SupplierList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()
    const [selectedData, setSelectedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const modalOn = async (data) => {

        const response = await fetch(`http://localhost:5500/api/supplier/${data._id}`, {
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
            const response = await fetch(`http://localhost:5500/api/supplier`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
                setIsLoading(false)
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, data, user])

    return ( 
        <div className="grid grid-cols-1 md:p-5 p-2 md:gap-y-8 gap-y-4 ">
            <div className="grid grid-cols-3 md:gap-x-8 gap-x-4">
                <div className="flex flex-col p-2 md:p-5 bg-white shadow md:gap-y-4 gap-y-2 border rounded-lg">
                    <div className="flex items-center">
                        <small className="font-semibold uppercase">TOTAL SUPPLIERS</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-500 font-bold">{data.length}</h4>}
                </div>
                <div className="flex flex-col p-2 md:p-5 bg-white shadow md:gap-y-4 gap-y-2 border rounded-lg">
                    <div className="flex items-center">
                        <small className="font-semibold uppercase">PURCHASE TRANSACTIONS</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-500 font-bold"></h4>}
                </div>
                <div className="flex flex-col p-2 md:p-5 bg-white shadow md:gap-y-4 gap-y-2 border rounded-lg">
                    <div className="flex items-center">
                        <small className="font-semibold uppercase">PAYMENT RECORDS</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-500 font-bold"></h4>}
                </div>
            </div>
            {data && <SupplierTable modalOn={modalOn} suppliers={data}/>}
            {data && <SuppliersGrid modalOn={modalOn} suppliers={data}/>}
            {selectedData && <SupplierDetails supplier={selectedData} modalOff={modalOff} />}
            {isLoading && <LoadingPage/>}
        </div>
     );
}
 
export default SupplierList;