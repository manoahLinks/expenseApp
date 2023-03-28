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
           <div className="grid grid-cols-2 p-3 bg-white">
                <div className='text-xs flex items-center whitespace-nowrap'>
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
            </div>
            <form className="grid grid-cols-1 p-5">
                {currentSection === 0 && ( 
                    <div className="grid overflow-x-scroll md:overflow-x-hidden grid-cols-1 bg-white">
                        <table className="table table-auto flex w-full">
                            <thead>
                                <tr className="md:grid whitespace-nowrap md:grid-cols-6 flex gap-x-1">
                                    <th className="w-32 md:w-full p-2 flex-1 border">Raw material</th>
                                    <th className="w-32 md:w-full p-2 flex-1 border">Opening stock</th>
                                    <th className="w-32 md:w-full p-2 flex-1 border">Qty recieved</th>
                                    <th className="w-32 md:w-full p-2 flex-1 border">Total</th>
                                    <th className="w-32 md:w-full p-2 flex-1 border">closing stock</th>
                                    <th className="w-32 md:w-full p-2 flex-1 border">Usage</th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col gap-y-1">
                                {rawmaterials && rawmaterials.map((rawmaterial)=>(
                                    <tr className="whitespace-nowrap justify-items-center md:grid md:grid-cols-6 flex gap-x-1" key={rawmaterial._id}>
                                        <h4 className="w-32 md:w-full p-2 sticky">{rawmaterial.name}</h4>
                                        <input className="w-32 md:w-full p-2 border-none bg-slate-100" type="number" />
                                        <input className="w-32 md:w-full p-2 border-none bg-slate-100" type="number" />
                                        <h4 className="w-32 md:w-full p-2">6500</h4>
                                        <input className="w-32 md:w-full p-2 border-none bg-slate-100" type="number" />
                                        <h4 className="w-32 md:w-full p-2">5800</h4>

                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 1 && ( 
                    <div className="gap-y-4 grid grid-cols-1 overflow-x-scroll md:overflow-hidden bg-white">
                        
                        <table className="table table-auto w-full text-xs shadow rounded-md border-collapse">
                            <thead>
                                <tr className="md:grid md:grid-cols-7 flex p-2 text-xs border-b ">
                                    <th className="md:w-full w-32">Product Type</th>
                                    <th className="md:w-full w-32">Bags produced</th>
                                    <th className="md:w-full w-32">loaves yielded</th>
                                    <th className="md:w-full w-32">unit price</th>
                                    <th className="md:w-full w-32">Expected yield</th>
                                    <th className="md:w-full w-32">Actual yield</th>
                                    <th className="md:w-full w-32">variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product)=>(
                                    <tr className="grid grid-cols-7 border-b md:gap-x-1" key={product._id}>
                                        <td className="md:w-full w-32 ">{product.name}</td>
                                        <input className="md:w-full w-32 border-none bg-slate-100 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={bags[product._id]}
                                            onChange={(e)=>{handleBags(product._id , e.target.value)}}
                                        />
                                        <input className=" md:w-full w-32 border-none bg-slate-100 text-xs focus:border-slate-300 focus:outline-none" type="number" 
                                            value={quantities[product._id]}
                                            onChange={(e)=>{handleQuantities(product._id , e.target.value)}}
                                        />
                                        <td className="md:w-full w-32 ">
                                            <h4 className="font-semibold text-green-500 rounded-full text-center">N {product.productionPrice}</h4>
                                        </td>
                                        <td className="md:w-full w-32">{accounting.formatNumber(2500 * bags[product._id])}</td>
                                        <td className="md:w-full w-32">{accounting.formatNumber(product.productionPrice * quantities[product._id])}</td>
                                        <td className="md:w-full w-32">{accounting.formatNumber((2500 * bags[product._id]) - (product.productionPrice * quantities[product._id]))}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 2 && ( 
                    <div className="grid grid-cols-1 overflow-x-scroll md:overflow-hidden bg-white">
                        <table className="table table-auto whitespace-nowrap text-center w-full text-xs">
                            <thead>
                                <tr className="md:grid md:grid-cols-9 flex border-b bg-primary bg-opacity-20">
                                    <th className="w-32 md:w-full px-4 py-2">Product Type</th>
                                    <th className="w-32 md:w-full px-4 py-2">Opening stock</th>
                                    <th className="w-32 md:w-full px-4 py-2">Qty recieved</th>
                                    <th className="w-32 md:w-full px-4 py-2">Total</th>
                                    <th className="w-32 md:w-full px-4 py-2">comp/incen/ ration</th>
                                    <th className="w-32 md:w-full px-4 py-2">Closing stock</th>
                                    <th className="w-32 md:w-full px-4 py-2">Qty Sold</th>
                                    <th className="w-32 md:w-full px-4 py-2">unit price</th>
                                    <th className="w-32 md:w-full px-4 py-2">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product)=>(
                                    <tr className="md:grid md:grid-cols-9 flex border-b" key={product._id}>
                                        <td className="w-32 md:w-full px-4 py-2">{product.name}</td>
                                        <td className='w-32 md:w-full'>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="w-32 md:w-full text-xs text-center border-none bg-slate-100 text-amber-500"  
                                        />
                                        <td className='w-32 md:w-full'>{`0`}</td>
                                        <input 
                                            type="number"
                                            className="w-32 md:w-full text-xs text-center border-none bg-slate-100 text-amber-500" 
                                        />
                                        <input 
                                            type="number"
                                            className="w-32 md:w-full text-xs text-center border-none bg-slate-100 text-amber-500" 
                                        />
                                        <input 
                                            className="w-32 md:w-full text-xs text-center border-none bg-amber-100 text-amber-500" 
                                            type="number" 
                                            value={sales[product._id] || ''}
                                            onChange={(e)=>{handleSales(product._id , e.target.value)}}
                                        />

                                        <td className='w-32 md:w-full'>{product.marketPrice}</td>
                                        <td className="w-32 md:w-full bg-green-200 text-green-500">{sales[product._id] * product.marketPrice}</td>
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
                {currentSection > 0 && <button onClick={handlePrevious} className="p-1 rounded-md text-white bg-primary">Previous</button>}
                {currentSection < 3 &&  <button onClick={handleNext} className="p-1 rounded-md text-white bg-primary">Next</button>}
            </div>
        </div>
     );
}
 
export default DailyActivityReportSheet;