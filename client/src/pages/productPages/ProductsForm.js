import {useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";

const ProductsForm = () => {

    const materialArray = []
    const [amount, setAmount] = useState(null)
    const [material, setMaterial] = useState(null)
    const [weight, setWeight] = useState(null)
    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

    const addMaterial = () => {
        
        materialArray.push({material: material, qty: weight, amount: amount}) 
        console.log(materialArray)
    } 

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
            </div>

            <div className="flex gap-x-2 p-2 m-2 bg-gray-200 items-center">
                <label htmlFor="" className="font-semibold text-sm">Name:</label>

                <input 
                    type="text"
                    placeholder="enter product name"
                    className="text-sm font-light border-none rounded-md" 
                />
            </div>
            <table className="grid grid-cols-1 m-2  bg-gray-200 rounded-lg">
                <thead className="grid text-center p-2 grid-cols-5 bg-gray-50">
                    <th>Raw Material</th>
                    <th>weight (grams)</th>
                    <th>price per grm</th>
                    <th>Cost</th>
                    <th>action</th>
                </thead>
                <tbody className="grid grid-cols-1">
                    
                        <tr className="grid grid-cols-5 text-center gap-x-0.5 p-2 items-center justify-center">
                       
                            <select 
                                type="text"
                                placeholder="material"
                                className="text-xs border-none rounded-md font-light"
                                value= {material}
                                onChange={(e)=>{setMaterial(e.target.value)}} 
                            >
                            <option value="">select</option>    
                            {data && data.map((material)=>(
                                <option
                                    key={material._id} 
                                    value={material.name}
                                >{material.name}</option>
                            ))}
                            </select>
                            
                            <input 
                                type="number"
                                placeholder="grms"
                                className="text-xs border-none rounded-md font-light"
                                onChange={(e)=>{setWeight(e.target.value)}}
                                value={weight}  
                            />
                        
                            <input 
                                type="number" 
                                className="text-xs font-light  border-none rounded-md"
                                value={``}
                            />
    
                            <input 
                                type="number" 
                                className="text-xs font-light  border-none rounded-md"
                                onChange={(e)=>{setAmount(e.target.value)}}
                                value={amount}
                            />
                            
                            <button onClick={addMaterial} className="p-1 bg-green-300 flex w-6/12 ml-4 items-center justify-center text-white rounded">
                                <h4>Add</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                          
                        </tr>
                    
                    

                    <tr className="grid grid-cols-5 text-center gap-x-0.5 p-2 items-center justify-center">
                        <h4 className="font-semibold">Total</h4>
                        <input 
                            type="number"
                            className="text-xs border border-green-300 bg-green-100 rounded-md font-light"  
                            disabled 
                        />

                        <input 
                            type="number"
                            className="text-xs bg-green-100 border border-green-300 bg-green-100 rounded-md font-light"
                            value={``}  
                            disabled 
                        />

                        <input 
                            type="number"
                            className="text-xs bg-green-100 border border-green-300 bg-green-100 rounded-md font-light"
                            value={``}  
                            disabled 
                        />

                    </tr>
                    <div className="grid grid-cols-2 p-2 gap-x-4">
                        <tr className="grid grid-cols-2 items-center justify-center">
                            <h4>Cost of Labour</h4>
                            <input type="text" className="text-xs border-none rounded font-light" />
                        </tr>
                        <tr className="grid grid-cols-2 items-center justify-center">
                            <h4>Cost of packaging</h4>
                            <input type="text" className="text-xs border-none rounded font-light" />
                        </tr>
                    </div>
                    
                </tbody>
            </table>
            {/* <ul>
                {materialArray.map((mat)=>(
                    <li>{mat.qty}</li>
                ))}
            </ul> */}
        </div>
     );
}
 
export default ProductsForm;