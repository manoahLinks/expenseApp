import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PieChart from "../../components/PieChart";
import SalesList from "./SalesList";

const SalesDashbord = () => {

    const {data} = useFetch(`http://localhost:5500/api/sales-transaction`)

    const totalSales = () => {
        let amountArray = data.map((transaction)=>{
           return transaction.amount
        })

        return amountArray.reduce((a, b) => a + b)
    }
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col md:gap-y-4 md:col-span-2 md:p-5 p-2 gap-y-4 md:gap-x-8 gap-x-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8">
                    <div className="flex col-span-2 md:p-5 p-2 bg-white gap-y-2 flex-col shadow-md rounded-lg">
                        <div className="flex justify-between items-center">
                            <small className="uppercase font-semibold">sales</small>
                            <input 
                                type="date"
                                className="text-xs border-slate-300 rounded-md" 
                            />
                        </div>
                        <div className="flex justify-between">
                            {data ? <h4 className="text-lg">N{totalSales()}</h4> : <h4>loading...</h4>}
                            <button className="flex items-center gap-x-2 bg-cyan-400 p-1 rounded-full text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <small>Transactions</small>
                            </button>
                        </div>
                        
                    </div>

                    <div className="flex md:p-5 p-2 gap-y-2 md:gap-y-4 bg-white flex-col shadow-md rounded-lg">
                        <div className="flex">
                            <small className="uppercase text-xs">sales completed</small>
                        </div>
                        {data && <h4 className="md:text-[30px] font-semibold text-slate-400">{data.length}</h4>}
                    </div>

                    <div className="flex md:p-5 p-2 bg-white flex-col gap-y-2 md:gap-y-4 shadow-md rounded-lg">
                        <div className="flex">
                            <small className="uppercase text-xs">Bank deposits</small>
                        </div>
                        <h4 className="md:text-[30px] font-semibold text-slate-400">N50,000</h4>
                    </div>
                </div>

                <SalesList/>
                
            </div>

            {/* sales card */}
            <div className="grid grid-cols-1 shadow md:p-5 p-2 bg-white text-xs gap-y-6 rounded-lg">
                <div className="flex justify-between">
                    <div className="flex ">
                        <small className="font-semibold">TOTAL SALES TREND</small>
                    </div>
                    <select className="text-xs border-slate-300 rounded" >
                        <option value="">monthly</option>
                        <option value="">weekly</option>
                        <option value="">daily</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <small>Avg this week</small>
                        <div className="flex items-baseline">
                            <h4 className="text-xl">500</h4>
                            <small>bags</small>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <small>yield</small>
                        <div className="flex items-baseline">
                            <h4 className="text-xl">15,500</h4>
                            <small>loaves</small>
                        </div>
                    </div>    
                </div>

                <div>
                    <PieChart></PieChart>
                </div>
                
            </div>
        </div>
     );
}
 
export default SalesDashbord;