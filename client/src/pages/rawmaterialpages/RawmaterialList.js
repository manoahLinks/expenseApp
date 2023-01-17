import { useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";

const RawmaterialList = () => {

    const {data, dispatch} = useDataContext()
    const [body, setBody] = useState(false)
    const {user} = useAuthContext()

    const handleBody = () => {
        if(!body){
            setBody(true)
        }else{
            setBody(false)
        }
    }

    const trim = (a) =>{
        return Math.floor(a)
    }

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://expesetracker.herokuapp.com/api/rawmaterial`, {
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
            <div className="flex justify-between p-2">
                <h4 className="text-sm font-semibold">Raw Materials</h4>
            </div>

            <div className="grid grid-cols-1 gap-y-2 m-2">
                {data && data.map((material)=>(
                    <div key={material._id} className="grid grid-cols-1 rounded-md shadow-md">
                        <div onClick={handleBody} className={`${body && 'bg-gray-100'} flex items-center justify-between p-2`}>
                            <h4 className="text font-semibold text-sm">{material.name}</h4>
                            <div className="flex rounded-full bg-gray-50 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        { body &&<div className="p-3 bg-gray-50">
                            <div className="grid grid-cols-4 gap-x-1 gap-y-2 items-center">
                                <h4>Net weight:</h4>
                                <h4 className="font-semibold">{material.netWeight}gm</h4>
                                <h4>Price:</h4>
                                <h4 className="font-semibold">{material.netPrice}</h4>
                                <h4>Price per gram:</h4>
                                <h4 className="font-semibold">{trim(material.netPrice/material.netWeight)}</h4>
                                <h4>Qty in stock:</h4>
                                <h4 className="font-semibold">{`nil`}</h4>
                                <h4>re-order lvl:</h4>
                                <h4 className="font-semibold">{material.reOrderLevel}</h4>
                                <h4>worth of stock:</h4>
                                <h4  className="font-semibold">{`nil`}</h4>
                            </div>
                     </div>}
                 </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default RawmaterialList;