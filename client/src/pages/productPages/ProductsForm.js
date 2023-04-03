import React, {useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";

const ProductsForm = () => {

    const [packaging, setPackaging] = useState('')
    const [rent, setRent] = useState('')
    const [weightPerLoaf, setWeightPerLoaf] = useState('')
    const [marketPrice, setMarketPrice] = useState('') 
    const [productionPrice, setProductionPrice] = useState('') 
    const [costOfProdution, setCostOfProduction] = useState('')
    const [totalDoughWeight, setTotalDoughWeight] = useState('') 
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
        console.log(quantities, costOfProdution, totalDoughWeight)
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

    const handleSubmit = async () => {

        const response = await fetch(`https://smartwork-api.onrender.com/api/product`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({}) 
        })

        const json = await response.json()

        if(!response.Ok){

        }
        if(response.ok){
            dispatch({type: 'CREATE_DATA', payload: json})
        }
    }

    return ( 
        <div className="grid grid-cols-1 items-center overflow-y-scroll justify-items-center inset-0 fixed bg-primary bg-opacity-20 rounded-md">
            <div className="flex flex-col bg-white md:p-5 mt-10 p-3 gap-y-4 md:w-6/12">
                <div className="flex justify-between items-center md:mb-6 mb-4">
                    <h4 className="font-semibold text-primary uppercase text-center">Create a new recipe</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                
                <div className="flex gap-x-4 m-2 items-center">
                    <label htmlFor="" className="font-semibold">Name:</label>

                    <input 
                        type="text"
                        placeholder="enter product name"
                        className="text-xs w-full border-slate-300 focus:border-slate-300 focus:outline-none rounded border" 
                    />
                </div>
                <table className="grid grid-cols-1">
                    <thead className="grid text-center p-2 grid-cols-4 border-b">
                        <th >Raw Material</th>
                        <th>weight (grams)</th>
                        <th>price per grm</th>
                        <th className="bg-slate-50">Cost</th>
                    </thead>
                    <tbody className="grid grid-cols-1">
                        {data && data.map((material)=>(
                            <tr key={material._id} className="grid grid-cols-4 text-center gap-x-0.5 p-2 items-center justify-center">
                        
                                <input 
                                    type="text"
                                    placeholder="material"
                                    className=" border-none focus:border-slate-300 focus:outline-none"
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
                                    className="text-xs border-none items-center  text-primary focus:border-slate-300 focus:outline-none"
                                    onChange={(e)=>{setAmount(e.target.value)}}
                                    value={quantities[material._id] * (material.netPrice/ material.netWeight)}
                                />
                            
                            </tr>
                        ))}
                        
                        <tr className="grid grid-cols-4 text-center gap-x-0.5 p-2 items-center justify-center">
                            <h4 className="font-semibold  text-red-500">Total</h4>
                            <input 
                                type="number"
                                className="text-xs border-none border-slate-500 bg-slate-50 rounded-md font-light"  
                                disabled
                                value={calculateTotalDoughWeight()}
                                onChange={(e)=>{setTotalDoughWeight(e.target.value)}}
                            />

                            <input 
                                type="number"
                                className="text-xs bg-inherit border-none rounded-md font-light"
                                value={``}  
                                disabled 
                            />

                            <input 
                                type="number"
                                className="text-xs bg-slate-50 border-none "
                                value={calculateTotalCost()}
                                onChange={(e)=>{setCostOfProduction(e.target.value)}}  
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
                            </tr>
                            <tr className="grid grid-cols-4 items-center justify-center">
                                <h4 className="text-red-800">Total prod. overhead</h4>
                                <input 
                                    type="number"
                                    className="text-xs border-none focus:border-slate-300 focus:outline-none rounded bg-slate-50"
                                    value={calculateProdOverhead()}  
                                />
                            </tr>
                            
                        </div>
                        <div className="grid grid-cols-1 p-2 rounded  gap-y-4 mt-4">
                            <h4 className="text-center font-bold uppercase text-primary">Summary</h4>
                            <table className="flex flex-col p-2 gap-y-2 text-slate-500">
                                <tr className="grid grid-cols-4 text-center">
                                    <th>Total Dough-weight</th>
                                    <th>Weight per loaf</th>
                                    <th>Expected loaves per bag</th>
                                </tr>
                                <tr className="grid grid-cols-4 text-center items-center">
                                    <td><h4>{calculateTotalDoughWeight()}grms</h4></td>
                                    <td>
                                        <input 
                                            type="number"
                                            className="text-xs w-full border-slate-300 rounded-md"
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
                <div className="flex gap-x-12 my-6">
                    <button className="border py-2 px-10 border hover:bg-red-500 hover:bg-opacity-20">cancel</button>
                    <button className="border px-12 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white">Proceed</button>    
                </div>
            </div>
                    
        </div>
     );
}
 
export default ProductsForm;