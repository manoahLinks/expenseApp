import { useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";

const ProductsForm = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

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
        <div className="grid grid-cols-1 gap-y-4">
            <div className="flex justify-between p-2">
                <h4 className="font-semibold text-sm">Create a recipe</h4>
                <button className="p-1 bg-green-300 flex items-center justify-center text-white rounded-md">
                    <h4>Add</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <div className="flex gap-x-2 p-2 m-2 bg-gray-100 items-center">
                <label htmlFor="" className="font-semibold text-sm">Name:</label>

                <input 
                    type="text"
                    placeholder="enter product name"
                    className="text-sm font-light border-none rounded-md" 
                />
            </div>
            <table className="grid grid-cols-1 m-2  bg-gray-100 rounded-lg">
                <thead className="grid text-center p-2 grid-cols-4 bg-gray-50">
                    <th>Raw Material</th>
                    <th>weight (grams)</th>
                    <th>price per grm</th>
                    <th>Cost</th>
                </thead>
                <tbody className="grid grid-cols-1">
                    {data && data.map((material)=>(
                        <tr className="grid grid-cols-4 text-center gap-x-0.5 p-2 items-center justify-center">
                        
                            <input 
                                type="text"
                                placeholder="material"
                                className="text-xs border-none rounded-md font-light"
                                value={material.name}  
                            />
                        
                            <input 
                                type="number"
                                placeholder="grms"
                                className="text-xs border-none rounded-md font-light"  
                            />
                        
                            <input 
                                type="number" 
                                className="text-xs font-light  border-none rounded-md"
                                value={material.netPrice/material.netWeight}
                            />
    
                            <input 
                                type="number" 
                                className="text-xs font-light  border-none rounded-md"
                                value={``}
                            />
                            
                          
                        </tr>
                    ))}
                    

                    <tr className="grid grid-cols-4 text-center gap-x-0.5 p-2 items-center justify-center">
                        <h4 className="font-semibold">Total</h4>
                        <input 
                            type="number"
                            className="text-xs border-none rounded-md font-light"  
                            disabled 
                        />

                        <input 
                            type="number"
                            className="text-xs border-none rounded-md font-light"
                            value={``}  
                            disabled 
                        />

                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default ProductsForm;