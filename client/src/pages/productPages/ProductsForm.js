import {useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";


const ProductsForm = () => {

    const materialArray = []
    const [quantities, setQuantities] = useState({})
    const [amount, setAmount] = useState(null)
    const [material, setMaterial] = useState(null)
    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

    const addMaterial = () => {
        
        materialArray.push({material: material, qty: weight, amount: amount}) 
        console.log(materialArray)
    } 

    const handleQuantities= (materialId, quantity) => {
        // update the quantity state variable with the quantity entered by the user
        setQuantities({ ...quantities, [materialId]: quantity });
      };


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
        <div className="grid grid-cols-1 gap-y-2">
            <div className="flex justify-between p-2">
                <h4 className="font-semibold text-sm">Create a recipe</h4>
            </div>

            <div className="flex gap-x-2 p-2 m-2 bg-gray-50 items-center">
                <label htmlFor="" className="font-semibold text-sm">Name:</label>

                <input 
                    type="text"
                    placeholder="enter product name"
                    className="text-sm font-light border" 
                />
            </div>
            <table className="grid grid-cols-1 m-2  bg-gray-50 rounded-lg">
                <thead className="grid text-center p-2 grid-cols-5 bg-gray-50">
                    <th className="col-span-2">Raw Material</th>
                    <th>weight (grams)</th>
                    <th>price per grm</th>
                    <th>Cost</th>
                </thead>
                <tbody className="grid grid-cols-1">
                    {data && data.map((material)=>(
                        <tr key={material._id} className="grid grid-cols-5 text-center gap-x-0.5 p-2 items-center justify-center">
                       
                            <input 
                                type="text"
                                placeholder="material"
                                className="text-xs font-light col-span-2"
                                value= {material.name}
                                onChange={(e)=>{setMaterial(e.target.value)}} 
                            />   
                            
                            <input 
                                type="number"
                                placeholder="grms"
                                className="text-xs font-light"
                                value={quantities[material._id] || ''}
                                onChange={(e)=>{handleQuantities(material._id , e.target.value)}} 
                            />
                        
                            <input 
                                type="number" 
                                className="text-xs font-light"
                                value={material.netPrice/ material.netWeight}
                            />
    
                            <input 
                                type="number" 
                                className="text-xs bg-amber-300 font-light"
                                onChange={(e)=>{setAmount(e.target.value)}}
                                value={quantities[material._id] * (material.netPrice/ material.netWeight)}
                            />
                          
                        </tr>
                    ))}
                    

                    <tr className="grid grid-cols-5 text-center gap-x-0.5 p-2 items-center justify-center">
                        <h4 className="font-semibold col-span-2 text-red-500">Total</h4>
                        <input 
                            type="number"
                            className="text-xs border border-green-300 bg-green-100 rounded-md font-light"  
                            disabled
                            value={``} 
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