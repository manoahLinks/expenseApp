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
            <div className='overflow-x-auto justify-evenly text-xs flex items-center'>
                <span onClick={()=>{handleClick(0)}} className={`cursor-pointer ${ activeTab === 0 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4`}>
                         <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                    </svg>
                    <h4>Material cost</h4>
                </span>
                <span onClick={()=>{handleClick(1)}} className={`cursor-pointer ${ activeTab === 1 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 1 ? `-rotate-12` : ``}`}>
                        <path d="M3.28 2.22a.75.75 0 00-1.06 1.06L5.44 6.5H2.75a.75.75 0 000 1.5h4.5A.75.75 0 008 7.25v-4.5a.75.75 0 00-1.5 0v2.69L3.28 2.22zM13.5 2.75a.75.75 0 00-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-2.69l3.22-3.22a.75.75 0 00-1.06-1.06L13.5 5.44V2.75zM3.28 17.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 101.06 1.06zM13.5 14.56l3.22 3.22a.75.75 0 101.06-1.06l-3.22-3.22h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-2.69z" />
                    </svg>
                    <h4 className="">Production</h4>
                </span>
                        <span onClick={()=>{handleClick(2)}} className={`cursor-pointer ${ activeTab === 2 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 2 ? `-rotate-12` : ``}`}>
                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <h4>sales</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`cursor-pointer ${ activeTab === 3 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 3 ? `-rotate-12` : ``}`}>
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                    <h4 >cash</h4>
                </span>
                    <span onClick={()=>{handleClick(4)}} className={`cursor-pointer ${ activeTab === 4 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 4 ? `-rotate-12` : ``}`}>
                        <path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
                    </svg>
                    <h4>Expenses</h4>
                </span>
                <span onClick={()=>{handleClick(5)}} className={`cursor-pointer ${ activeTab === 5 ? `border-b-4 border-primary` : ``} border-b-4 md:p-2 hover:border-b-4 hover:border-primary p-1 items-center flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 5 ? `-rotate-12` : ``}`}>
                        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    
                    <h4>Analytics</h4>
                </span>
            </div>
            <form className="p-5 grid grid-cols-1 justify-items-center">
                {currentSection === 0 && ( 
                    <div className="grid grid-cols-1">
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
                    <div className="gap-y-4 grid grid-cols-1">
                        
                        <table className="table table-auto w-full text-xs shadow rounded-md border-collapse">
                            <thead>
                                <tr className="grid grid-cols-7 text-xs border-b ">
                                    <th className="px-4 py-2">Product Type</th>
                                    <th className="px-4 py-2">Bags produced</th>
                                    <th className="px-4 py-2">loaves yielded</th>
                                    <th className="px-4 py-2">unit price</th>
                                    <th className="px-4 py-2">Expected yield</th>
                                    <th className="px-4 py-2">Actual yield</th>
                                    <th className="px-4 py-2">variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((product)=>(
                                    <tr className="grid grid-cols-7 border-b p-2 gap-x-2" key={product._id}>
                                        <td className="px-4 py-2">{product.name}</td>
                                        <input className="p-2 border-slate-300 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={bags[product._id] || 0 }
                                            onChange={(e)=>{handleBags(product._id , e.target.value)}}
                                        />
                                        <input className=" border-slate-300 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={quantities[product._id] || 0}
                                            onChange={(e)=>{handleQuantities(product._id , e.target.value)}}
                                        />
                                        <td className="px-4 py-2 ">
                                            <h4 className="bg-green-200 rounded-full text-center p-1">{product.productionPrice}</h4>
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
                    <div className="grid grid-cols-1">
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