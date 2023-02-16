import {useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import accounting from 'accounting-js'


const ProductsForm = () => {

    const [packaging, setPackaging] = useState('')
    const [rent, setRent] = useState('')
    const [labour, setLabour] = useState('')
    const [energy, setEnergy] = useState(``)
    const [amount, setAmount] = useState(null)
    const [quantities, setQuantities] = useState({})
    const [material, setMaterial] = useState(null)
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

    const handleQuantities = (itemId, quantity) => {
        // update the quantity state variable with the quantity entered by the user
        setQuantities({ ...quantities, [itemId]: quantity})
      };

    const calculateTotalCost = () => {
        let total = 0;
        for (let item of data) {
          const quantity = quantities[item._id] || 0;
          total += (item.netPrice/item.netWeight) * quantity;
        }
        return total;
    } 

    const calculateTotalDoughWeight = () => {
        let total = 0
        for (let item of data) {
            const quantity = quantities[item._id] || 0;
            total += Number(quantity);
          }
          return total;
    } 
    
    const calculateProdOverhead = () => {
        return Number(rent) + Number(packaging) + Number(labour) + Number(energy)
    }

    return ( 
        <div className="grid grid-cols-1 gap-y-2">
            <div className="flex justify-between p-2">
                <h4 className="font-semibold text-sm">Create a recipe</h4>
            </div>

            <div className="flex gap-x-2 m-2 p-2 bg-gray-50 items-center">
                <label htmlFor="" className="font-semibold text-xs">Name:</label>

                <input 
                    type="text"
                    placeholder="enter product name"
                    className="text-xs w-full rounded font-light border" 
                />
            </div>
            <table className="grid grid-cols-1 m-2 text-xs  bg-gray-50 rounded-lg">
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
                                value={quantities[material._id]}
                                onChange={(e)=>{handleQuantities(material._id , e.target.value)}} 
                            />
                        
                            <input 
                                type="number" 
                                className="text-xs font-light"
                                value={material.netPrice/ material.netWeight}
                            />
    
                            <input 
                                type="number" 
                                className="text-xs bg-amber-200 font-light"
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
                            value={calculateTotalDoughWeight()}
                        />

                        <input 
                            type="number"
                            className="text-xs bg-inherit border-none rounded-md font-light"
                            value={``}  
                            disabled 
                        />

                        <input 
                            type="number"
                            className="text-xs bg-green-100 border border-green-300 bg-green-100 rounded-md font-light"
                            value={calculateTotalCost()}  
                            disabled 
                        />

                    </tr>
                    <div className="grid grid-cols-1 p-3 rounded bg-gray-300 gap-y-2 mt-4">
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="text-white">Cost of Labour</h4>
                            <input 
                                type="text" 
                                className="text-xs border rounded font-light"
                                value={labour}
                                onChange={(e) =>{setLabour(e.target.value)}} 
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="text-white">Cost of packaging</h4>
                            <input 
                                type="text" 
                                className="text-xs rounded font-light"
                                value={packaging}
                                onChange={(e)=>{setPackaging(e.target.value)}}  
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="text-white">Cost of Rent</h4>
                            <input 
                                type="text" 
                                className="text-xs rounded font-light"
                                value={rent}
                                onChange={(e)=>{setRent(e.target.value)}}  
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="text-white">Cost of Energy</h4>
                            <input 
                                type="text" 
                                className="text-xs rounded font-light"
                                value={energy}
                                onChange={(e)=>{setEnergy(e.target.value)}}  
                            />


                            <div className="col-span-2 ml-2 grid grid grid-cols-2 items-center">
                                <h4 className="text-white">Total prod. overhead</h4>
                                <input 
                                    type="number"
                                    className="text-xs rounded bg-green-100 text-green-500"
                                    value={calculateProdOverhead()}  
                                />
                            </div>
                        </tr>
                    </div>
                    <div className="grid grid-cols-1 p-3 rounded bg-primary bg-opacity-20 gap-y-2 mt-4">
                        <h4 className="text-center font-bold uppercase text-primary">Summary</h4>
                    </div>
                </tbody>
            </table>
            
        </div>
     );
}
 
export default ProductsForm;