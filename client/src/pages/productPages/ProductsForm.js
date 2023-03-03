import React, {useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";


const ProductsForm = () => {

    const [packaging, setPackaging] = useState('')
    const [rent, setRent] = useState('')
    const [weightPerLoaf, setWeightPerLoaf] = useState('')
    const [marketPrice, setMarketPrice] = useState('') 
    const [productionPrice, setProductionPrice] = useState('') 
    const [labour, setLabour] = useState('')
    const [energy, setEnergy] = useState(``)
    // eslint-disable-next-line
    const [amount, setAmount] = useState(null)
    const [quantities, setQuantities] = useState({})
    // eslint-disable-next-line
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
        console.log(quantities)
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

    const calculateCost = () => {
        return calculateProdOverhead() + calculateTotalCost()
    }

    return ( 
        <div className="grid grid-cols-1 gap-y-2 p-2 bg-white rounded-md">
            
            <h4 className="font-semibold text-primary uppercase text-center mb-4 text-sm">Create a new recipe</h4>

            <div className="flex gap-x-2 m-2 items-center">
                <label htmlFor="" className="font-semibold text-xs">Name:</label>

                <input 
                    type="text"
                    placeholder="enter product name"
                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded font-light border" 
                />
            </div>
            <table className="grid grid-cols-1 m-2 text-xs rounded-lg border border-slate-200">
                <thead className="grid text-center p-2 grid-cols-5 ">
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
                                className="text-xs text-center border-none focus:border-slate-300 focus:outline-none col-span-2"
                                value= {material.name}
                                onChange={(e)=>{setMaterial(e.target.value)}} 
                            />   
                            
                            <input 
                                type="number"
                                placeholder="grms"
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light"
                                value={quantities[material._id]}
                                onChange={(e)=>{handleQuantities(material._id , e.target.value)}} 
                            />
                        
                            <input 
                                type="number" 
                                className="text-xs border-none text-center focus:border-slate-300 focus:outline-none font-light"
                                value={material.netPrice/ material.netWeight}
                            />
    
                            <input 
                                type="number" 
                                className="text-xs border-none items-center text-primary focus:border-slate-300 focus:outline-none"
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
                    <div className="grid grid-cols-1 p-3 rounded border-y gap-y-2 mt-4">
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="">Cost of Labour</h4>
                            <input 
                                type="text" 
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded font-light"
                                value={labour}
                                onChange={(e) =>{setLabour(e.target.value)}} 
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="">Cost of packaging</h4>
                            <input 
                                type="text" 
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded font-light"
                                value={packaging}
                                onChange={(e)=>{setPackaging(e.target.value)}}  
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="">Cost of Rent</h4>
                            <input 
                                type="text" 
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded font-light"
                                value={rent}
                                onChange={(e)=>{setRent(e.target.value)}}  
                            />
                        </tr>
                        <tr className="grid grid-cols-4 items-center justify-center">
                            <h4 className="">Cost of Energy</h4>
                            <input 
                                type="text" 
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded font-light"
                                value={energy}
                                onChange={(e)=>{setEnergy(e.target.value)}}  
                            />


                            <div className="col-span-2 ml-2 grid grid grid-cols-2 items-center">
                                <h4 className="">Total prod. overhead</h4>
                                <input 
                                    type="number"
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none rounded bg-green-100 text-green-500"
                                    value={calculateProdOverhead()}  
                                />
                            </div>
                        </tr>
                    </div>
                    <div className="grid grid-cols-1 p-2 rounded  gap-y-4 mt-4">
                        <h4 className="text-center font-bold uppercase text-primary">Summary</h4>
                        <table className="flex flex-col p-2 gap-y-2 text-slate-500">
                            <tr className="grid grid-cols-3 text-center">
                                <th>Total Dough-weight</th>
                                <th>Weight per loaf</th>
                                <th>Expected loaves per bag</th>
                            </tr>
                            <tr className="grid grid-cols-3 text-center items-center">
                                <td><h4>{calculateTotalDoughWeight()}grms</h4></td>
                                <td>
                                    <input 
                                        type="number"
                                        className="text-xs border-slate-300 rounded-md"
                                        value={weightPerLoaf}
                                        onChange={(e)=>{setWeightPerLoaf(e.target.value)}} 
                                    />
                                </td>
                                <td>
                                    <h4>{calculateTotalDoughWeight()/weightPerLoaf}</h4>
                                </td>
                            </tr>
                        </table>
                        <hr />
                        <table className="flex flex-col gap-y-2 p-2 text-slate-500">
                            <tr className="grid grid-cols-4 text-center">
                                <th>Total Cost of Prod.</th>
                                <th>Expected Price per loaf</th>
                                <th>set Market Price</th>
                                <th>Profit per loaf</th>
                            </tr>

                            <tr className="grid grid-cols-4 text-center items-center">
                                <td><h4>{calculateCost()}</h4></td>
                                <td>
                                    <input 
                                        type="number"
                                        className="text-xs w-9/12 border-slate-300 rounded-md"
                                        value={calculateCost() / (calculateTotalDoughWeight()/weightPerLoaf)}
                                        onChange={(e)=>{setProductionPrice(e.target.value)}}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="number"
                                        className="text-xs w-9/12 border-slate-300 rounded-md"
                                        value={marketPrice}
                                        onChange={(e)=>{setMarketPrice(e.target.value)}} 
                                    />
                                </td>
                                <td>
                                    <h4>{productionPrice - marketPrice }</h4>
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                </tbody>
            </table>
            
        </div>
     );
}
 
export default ProductsForm;