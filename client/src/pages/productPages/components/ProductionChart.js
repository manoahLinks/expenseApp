import React, {useState, useEffect} from "react";
import {useDataContext} from '../../../hooks/useDataContext'
import { useAuthContext } from "../../../hooks/useAuthContext";
import BarChart from "../../../components/BarChart";

const ProductionChart = () => {


    const {data, dispatch} = useDataContext()
    const [chart, setChart] = useState([])
    const {user} = useAuthContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://expense-app-manoahlinks.vercel.app/api/product`, {
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
            {data && data.map((product)=>(
                setChart(product)
            ))}

            {chart && <BarChart label={chart} data={chart} />}
        </div>
     );
}
 
export default ProductionChart;