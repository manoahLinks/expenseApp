import React, {useState, useEffect} from "react";
import PieChart from "../../../components/PieChart";
import { useAuthContext } from "../../../hooks/useAuthContext";
import {useDataContext} from '../../../hooks/useDataContext'

const RawmaterialChart = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()


    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/rawmaterial`, {
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
             <PieChart data={data}/>
        </div>
     );
}
 
export default RawmaterialChart;