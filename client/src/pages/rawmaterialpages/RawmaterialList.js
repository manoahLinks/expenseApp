import React, { useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import RawmaterialDetail from "./RawmaterialDetail";
import RawmaterialTable from "./component/Rawmaterialtable";
import RawmaterialBoard from "./component/RawmaterialBoard";
import LoadingPage from "../../components/Loading";

const RawmaterialList = () => {

    const {data, dispatch} = useDataContext()
    const [selectedMaterial, setSelectedMaterial] = useState(false)
    const {user} = useAuthContext()
    const [isLoading, setIsLoading] = useState(true)

    const modalOn = async (data) => {
        
        const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial/${data._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            setSelectedMaterial({...data ,json})
        }
    }

    const modalOff = () => {
        setSelectedMaterial(null)
    }

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial`, {
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
        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-y-8 gap-y-4 p-2 md:p-5 bg-slate-50">
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
            <div className="grid grid-cols-1 p-2 hidden md:block">
                <RawmaterialTable materials={data} modalOn={modalOn}/>
            </div>

            <div className="shadow-md md:hidden grid grid-cols-1 md:gap-y-8 md:gap-x-4 m-2 md:m-5">
                {data && data.map((material)=>(
                    <div key={material._id} className="grid grid-cols-1 bg-white ">
                        <div onClick={()=>{modalOn(material)}} className={`flex items-center justify-between p-2`}>
                            <div className="flex p-1 bg-green-100 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text text-sm">{material.name}</h4>
                                <div className="flex">

                                </div>
                            </div>
                            <div className="flex bg-gray-100 rounded p-1">
                                <h4>{material.qtyAvailable}</h4>
                                
                            </div>
                        </div>
                        <hr />
                 </div>
                ))}
                
            </div>
            {selectedMaterial && <RawmaterialDetail material={selectedMaterial} modalOff={modalOff} />}
            {isLoading && <LoadingPage/>}
        </div>
     );
}
 
export default RawmaterialList;