import React, {useState, useEffect} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import accounting from 'accounting-js'
import useFetch from '../useFetch'

const DailyActivityReportSheet = () => {

    const [quantities, setQuantities] = useState({})
    const [sales, setSales] = useState({})
    const [bags, setBags] = useState({})
    const [currentSection, setCurrentSection] = useState(0)
    const [activeTab, setActiveTab] = useState(0)
    const {user} = useAuthContext()

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

    const handlePrevious = () => {
        setCurrentSection(currentSection - 1)
        setActiveTab(currentSection - 1)
    }

    const handleNext = () => {
        setCurrentSection(currentSection + 1)
        setActiveTab(currentSection + 1)
    }

    const {result:rawmaterials} = useFetch(`http://localhost:5500/api/rawmaterial`)
    const {result:products} = useFetch(`http://localhost:5500/api/product`)

    return ( 
        <div className="flex flex-col">
           <div className="flex justify-between md:mx-5 mx-2 p-2 bg-white">
                <div className='flex items-center whitespace-nowrap'>
                    <span onClick={()=>{handleClick(0)}} className={`flex p-2 ${activeTab === 0 ? `border-b-2 border-green-400` :``} p-2 border-b-2 cursor-pointer `}>
                        <h4>Raw materials</h4>
                    </span>
                    <span onClick={()=>{handleClick(1)}} className={`flex p-2 ${activeTab === 1 ? `border-b-2 border-green-400` :``} p-2 border-b-2 cursor-pointer `}>
                        <h4>Production</h4>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className={`flex p-2 ${activeTab === 2 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>Sales</h4>
                    </span>
                    <span onClick={()=>{handleClick(3)}} className={`flex p-2 ${activeTab === 3 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>Cash Analysis</h4>
                    </span>        
                </div>
                <div className="grid grid-cols-2 gap-x-2 items-center">
                    <button className="flex items-center p-2 border rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <small>save</small>    
                    </button>
                    <button className="flex items-center p-2 bg-green-500 text-white rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <small>submit</small>    
                    </button>
                </div>
            </div>
            <hr />
            <form className="grid grid-cols-1 p-5">
                {currentSection === 0 && ( 
                    <div className="grid overflow-x-scroll md:overflow-x-hidden grid-cols-1 bg-white">
                        <table className="table border table-auto flex w-full">
                            <thead>
                                <tr className="md:grid whitespace-nowrap p-0.5 gap-x-0.5 md:grid-cols-6 flex border-b">
                                    <th className="w-32 border md:w-full p-2 flex-1">Raw material</th>
                                    <th className="w-32 border md:w-full p-2 flex-1">Opening stock</th>
                                    <th className="w-32 border md:w-full p-2 flex-1">Qty recieved</th>
                                    <th className="w-32 border md:w-full p-2 flex-1">Total</th>
                                    <th className="w-32 border md:w-full p-2 flex-1">closing stock</th>
                                    <th className="w-32 border md:w-full p-2 flex-1">Usage</th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col">
                                {rawmaterials && rawmaterials.map((rawmaterial)=>(
                                    <tr className="whitespace-nowrap p-0.5 gap-x-0.5 justify-items-center text-center md:grid md:grid-cols-6 flex" key={rawmaterial._id}>
                                        <h4 className="w-32 border md:w-full p-2 ">{rawmaterial.name}</h4>
                                        <input className="w-32 border md:w-full p-2 border-none" type="number" />
                                        <input className="w-32 border md:w-full p-2 border-none bg-slate-100" type="number" />
                                        <h4 className="w-32 border md:w-full p-2">{}</h4>
                                        <input className="w-32 border md:w-full p-2 border-none bg-slate-100" type="number" />
                                        <h4 className="w-32 border md:w-full p-2">{}</h4>

                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 1 && ( 
                    <div className="gap-y-4 grid grid-cols-1 overflow-x-scroll md:overflow-hidden bg-white">
                        
                        <table className="table table-auto border w-full shadow rounded-md border-collapse">
                            <thead>
                                <tr className="md:grid md:grid-cols-7 flex p-0.5 gap-x-0.5 border-b ">
                                    <th className="md:w-full border p-2 w-32">Product Type</th>
                                    <th className="md:w-full border p-2 w-32">Bags produced</th>
                                    <th className="md:w-full border p-2 w-32">loaves yielded</th>
                                    <th className="md:w-full border p-2 w-32">unit price</th>
                                    <th className="md:w-full border p-2 w-32">Expected yield</th>
                                    <th className="md:w-full border p-2 w-32">Actual yield</th>
                                    <th className="md:w-full border p-2 w-32">variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product)=>(
                                    <tr className="grid grid-cols-7 p-0.5 gap-x-0.5 text-center items-center" key={product._id}>
                                        <td className="md:w-full border p-2 w-32 ">{product.name}</td>
                                        <input className="md:w-full border p-2 w-32 border-none bg-slate-100 focus:border-slate-300 focus:outline-none" type="number" 
                                            value={bags[product._id]}
                                            onChange={(e)=>{handleBags(product._id , e.target.value)}}
                                        />
                                        <input className=" md:w-full border p-2 w-32 border-none bg-slate-100 focus:border-slate-300 focus:outline-none" type="number" 
                                            value={quantities[product._id]}
                                            onChange={(e)=>{handleQuantities(product._id , e.target.value)}}
                                        />
                                        <td className="md:w-full border p-2 w-32 ">
                                            <h4 className="font-semibold text-green-700 rounded-full text-center">N {product.productionPrice}</h4>
                                        </td>
                                        <td className="md:w-full border p-2 w-32">{accounting.formatNumber(2500 * bags[product._id])}</td>
                                        <td className="md:w-full border p-2 w-32">{accounting.formatNumber(product.productionPrice * quantities[product._id])}</td>
                                        <td className="md:w-full border p-2 w-32">{accounting.formatNumber((2500 * bags[product._id]) - (product.productionPrice * quantities[product._id]))}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 2 && ( 
                    <div className="grid grid-cols-1 overflow-x-scroll md:overflow-hidden bg-white">
                        <table className="table table-auto border whitespace-nowrap text-center w-full">
                            <thead>
                                <tr className="md:grid md:grid-cols-9 flex gap-x-0.5 p-0.5 border-b">
                                    <th className="w-32 md:w-full p-2 border">Product Type</th>
                                    <th className="w-32 md:w-full p-2 border">Opening stock</th>
                                    <th className="w-32 md:w-full p-2 border">Qty recieved</th>
                                    <th className="w-32 md:w-full p-2 border">Total</th>
                                    <th className="w-32 md:w-full p-2 border truncate">comp/incen/ration</th>
                                    <th className="w-32 md:w-full p-2 border">Closing stock</th>
                                    <th className="w-32 md:w-full p-2 border">Qty Sold</th>
                                    <th className="w-32 md:w-full p-2 border">unit price</th>
                                    <th className="w-32 md:w-full p-2 border">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product)=>(
                                    <tr className="md:grid md:grid-cols-9 text-center items-center flex gap-x-0.5 p-0.5" key={product._id}>
                                        <td className="w-32 border p-2 md:w-full px-4 py-2">{product.name}</td>
                                        <td className='w-32 border p-2 md:w-full'>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="w-32 border p-2 md:w-full text-center border-none bg-slate-100 text-amber-500"  
                                        />
                                        <td className='w-32 border p-2 md:w-full'>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="w-32 border p-2 md:w-full text-center border-none bg-slate-100 text-amber-500" 
                                        />
                                        <input 
                                            type="number"
                                            className="w-32 border p-2 md:w-full text-center border-none bg-slate-100 text-amber-500" 
                                        />
                                        <input 
                                            className="w-32 border p-2 md:w-full text-center border-none bg-amber-100 text-amber-500" 
                                            type="number" 
                                            value={sales[product._id] || ''}
                                            onChange={(e)=>{handleSales(product._id , e.target.value)}}
                                        />

                                        <td className='w-32 border p-2 md:w-full'>{product.marketPrice}</td>
                                        <td className="w-32 border p-2 md:w-full text-green-500">{sales[product._id] * product.marketPrice}</td>
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

            <div className="justify-between flex md:p-5 p-3">
                {currentSection > 0 && <button onClick={handlePrevious} className="py-1 px-2 bg-gradient-to-r from-blue-300 to-cyan-500 rounded-md text-white bg-primary">Previous</button>}
                {currentSection < 3 &&  <button onClick={handleNext} className="py-1 px-2 bg-gradient-to-l from-blue-300 to-cyan-500 rounded-md text-white bg-primary">Next</button>}
            </div>
        </div>
     );
}
 
export default DailyActivityReportSheet;