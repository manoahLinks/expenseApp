import React, {useState, useEffect} from "react";
import {useDataContext} from '../hooks/useDataContext'
import { useAuthContext } from "../hooks/useAuthContext";
import accounting from 'accounting-js'

const DailyActivityReportSheet = () => {

    const [quantities, setQuantities] = useState({})
    const [sales, setSales] = useState({})
    const [bags, setBags] = useState({})
    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)
    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleQuantities= (productId, quantity) => {
        // update the quantity state variable with the quantity entered by the user
        setQuantities({ ...quantities, [productId]: quantity });
      };

      const handleSales= (productId, quantity) => {
        // update the quantity state variable with the quantity entered by the user
        setSales({ ...sales, [productId]: quantity });
      };

      const handleBags= (productId, bag) => {
        // update the quantity state variable with the quantity entered by the user
        setBags({ ...bags, [productId]: bag });
      };

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/product` , {
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
        <div className="flex flex-col">
           <div className="grid grid-cols-2 p-3 bg-white">
                <div className='text-xs flex items-center'>
                    
                    <span onClick={()=>{handleClick(1)}} className={`flex p-2 ${activeTab === 1 ? `border-b-2 border-green-400` :``} p-2 border-b-2 cursor-pointer `}>
                        <h4>Dashboard</h4>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className={`flex p-2 ${activeTab === 2 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>Admin</h4>
                    </span>    
                </div>
            </div>
            <form className="grid grid-cols-1 justify-items-center">
                {currentSection === 0 && ( 
                    <div className="grid grid-cols-1 bg-white">
                        <table className="table table-auto w-full text-left border-collapse">
                            <thead>
                                <tr className="grid grid-cols-4">
                                    <th className="px-4 py-2 border">Raw material</th>
                                    <th className="px-4 py-2 border">Quantity</th>
                                    <th className="px-4 py-2 border">unit price</th>
                                    <th className="px-4 py-2 border">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((product)=>(
                                    <tr className="grid grid-cols-4" key={product._id}>
                                        
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 1 && ( 
                    <div className="gap-y-4 grid grid-cols-1 bg-white">
                        
                        <table className="table table-auto w-full text-xs shadow rounded-md border-collapse">
                            <thead>
                                <tr className="grid grid-cols-8 p-2 text-left text-xs border-b ">
                                    <th className=" col-span-2">Product Type</th>
                                    <th className="">Bags produced</th>
                                    <th className="">loaves yielded</th>
                                    <th className="">unit price</th>
                                    <th className="">Expected yield</th>
                                    <th className="">Actual yield</th>
                                    <th className="">variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((product)=>(
                                    <tr className="grid grid-cols-8 border-b p-2 md:gap-x-1" key={product._id}>
                                        <td className="col-span-2">{product.name}</td>
                                        <input className="border-slate-300 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={bags[product._id]}
                                            onChange={(e)=>{handleBags(product._id , e.target.value)}}
                                        />
                                        <input className=" border-slate-300 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={quantities[product._id]}
                                            onChange={(e)=>{handleQuantities(product._id , e.target.value)}}
                                        />
                                        <td className="">
                                            <h4 className="bg-green-100 font-semibold text-green-500 rounded-full text-center p-1">N {product.productionPrice}</h4>
                                        </td>
                                        <td className="px-4 py-2">{accounting.formatNumber(2500 * bags[product._id])}</td>
                                        <td className="px-4 py-2">{accounting.formatNumber(product.productionPrice * quantities[product._id])}</td>
                                        <td className="px-4 py-2">{accounting.formatNumber((2500 * bags[product._id]) - (product.productionPrice * quantities[product._id]))}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 2 && ( 
                    <div className="grid grid-cols-1 bg-white">
                        <table className="table table-auto text-center w-full text-xs border-collapse">
                            <thead>
                                <tr className="grid grid-cols-9 border-b bg-primary bg-opacity-20">
                                    <th className="px-4 py-2">Product Type</th>
                                    <th className="px-4 py-2">Opening stock</th>
                                    <th className="px-4 py-2">Qty recieved</th>
                                    <th className="px-4 py-2">Total</th>
                                    <th className="px-4 py-2">comp/incen/ ration</th>
                                    <th className="px-4 py-2">Closing stock</th>
                                    <th className="px-4 py-2">Qty Sold</th>
                                    <th className="px-4 py-2">unit price</th>
                                    <th className="px-4 py-2">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((product)=>(
                                    <tr className="grid grid-cols-9 border-b" key={product._id}>
                                        <td className="px-4 py-2">{product.name}</td>
                                        <td>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="text-xs text-center border-slate-300 text-amber-500"  
                                        />
                                        <td>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="text-xs text-center border-slate-300 text-amber-500" 
                                        />
                                        <input 
                                            type="number"
                                            className="text-xs text-center border-slate-300 text-amber-500" 
                                        />
                                        <input 
                                            className="text-xs text-center border-none bg-amber-100 text-amber-500" 
                                            type="number" 
                                            value={sales[product._id] || ''}
                                            onChange={(e)=>{handleSales(product._id , e.target.value)}}
                                        />

                                        <td>{product.marketPrice}</td>
                                        <td className="bg-green-200 text-green-500">{sales[product._id] * product.marketPrice}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 3 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section3</h4>
                    </div>
                )}

                {currentSection === 4 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section4</h4>
                    </div>
                )}

                {currentSection === 5 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section5</h4>
                    </div>
                )}
            </form>
        </div>
     );
}
 
export default DailyActivityReportSheet;