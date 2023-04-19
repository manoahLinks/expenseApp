import React, { useEffect, useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import SupplierTable from "./components/SupplierTable";
import SupplierDetails from "./SupplierDetails";
import SuppliersGrid from "./components/SuppliersGrid";

const SupplierList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()
    const [selectedData, setSelectedData] = useState(null)

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
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, data, user])

    return ( 
        <div className="grid grid-cols-1 m-2">
            {data && <SupplierTable modalOn={modalOn} suppliers={data}/>}
            {data && <SuppliersGrid modalOn={modalOn} suppliers={data}/>}
            {selectedData && <SupplierDetails supplier={selectedData} modalOff={modalOff} />}
        </div>
     );
}
 
export default SupplierList;