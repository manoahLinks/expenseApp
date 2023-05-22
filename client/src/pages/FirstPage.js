import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useFetch from "../useFetch";
import ProductionRecordTable from "./productPages/components/ProductionRecordTable";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const Homepage = () => {

    const {user} = useAuthContext()
    const {result: productRecords} = useFetch(`http://localhost:5500/api/production-record`)
    const {result: usage} = useFetch(`http://localhost:5500/api/rawmaterial-transaction`)
    
    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)

    const handleClick = (section) => {
            setCurrentSection(section)
            setActiveTab(section)
    }


    const bagsProduced = () => {
        let totBags = 0
        for (let item of productRecords) {
            totBags += item.bags
        }
        return totBags
    }

    const totalUsage = () => {

        let totValue = 0
        let usages = usage.filter((a)=>{
            return a.type === 'usage'
        })
        for (let item of usages) {
            totValue += item.amount
        }
        return totValue
    }
 
    return ( 
        <div className="grid grid-cols-1 gap-y-2 md:mx-5 mx-2">
            <div className="md:flex grid-cols-1 md:justify-between items-center ">
                <div className='flex gap-x-4 items-center'>
                    <img className='bg-slate-50 w-16 h-16 rounded-full' src={require(`../assets/icons8-user-male-100.png`)} alt="" />
                    <div className='flex flex-col'>
                        {user && <h4 className="font-semibold text-xs">Welcome {user.email}</h4>}
                        <small>we hope you are having a great day</small>
                    </div>
                </div>
                <div>
                    <select className='border-slate-200 w-full rounded-md text-xs'>
                        <option value="">Today</option>
                        <option value="">Weekly</option>
                        <option value="">Monthly</option>
                    </select>
                </div>
                
            </div>
            <hr />

            <div className="grid md:grid-cols-4 grid-cols-2">
                {/* sales revenue */}
                <div onClick={()=>{handleClick(1)}} className={`flex cursor-pointer flex-col gap-y-4 ${activeTab === 1 ? `border-orange-500 bg-orange-300 bg-opacity-10`: `border-white`} border-b-2 p-2 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <div className="flex gap-x-2 items-center">
                        <small className="uppercase font-semibold">Total Revenue</small>
                        <small className="bg-green-100 text-green-700 rounded-lg px-1">15+</small>
                    </div>
                    <h4 className="font text-xl font-bold">0.00</h4>
                    <small>see more</small>
                </div>

                {/* production report */}
                <div onClick={()=>{handleClick(2)}} className={`flex cursor-pointer flex-col gap-y-4 ${activeTab === 2 ? `border-orange-500 bg-orange-300 bg-opacity-10`: `border-white`} border-b-2 p-2 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 text-amber-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex gap-x-2 items-center">
                        <small className="uppercase font-semibold">Production</small>
                        <small className="bg-green-100 text-green-700 rounded-lg px-1">15+</small>
                    </div>
                    <h4 className="font text-xl font-bold text-slate-400">{productRecords && bagsProduced()} bags</h4>
                    <small>see more</small>
                </div>
                {/* rawmaterials */}
                <div onClick={()=>{handleClick(3)}} className={`flex cursor-pointer flex-col gap-y-4 ${activeTab === 3 ? `border-orange-500 bg-orange-300 bg-opacity-10`: `border-white`} border-b-2 p-2 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex gap-x-2 items-center">
                        <small className="uppercase font-semibold">Raw materials usage</small>
                        <small className="bg-green-100 text-green-700 rounded-lg px-1">15+</small>
                    </div>
                    {usage ? <h4 className="font text-xl font-bold text-slate-400">{totalUsage()}</h4> : <h4>pending ...</h4>}
                    <small>see more</small>
                </div>
                {/* Expenditure */}
                <div onClick={()=>{handleClick(4)}} className={`flex cursor-pointer flex-col gap-y-4 ${activeTab === 4 ? `border-orange-500 bg-orange-300 bg-opacity-10`: `border-white`} border-b-2 p-2 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    <div className="flex gap-x-2 items-center">
                        <small className="uppercase font-semibold">Total expenditure</small>
                        <small className="bg-green-100 text-green-700 rounded-lg px-1">15+</small>
                    </div>
                    <h4 className="font text-xl font-bold">0.00</h4>
                    <small>see more</small>
                </div>
            </div>

            <div className="flex flex-col mt-8 rounded-lg border-orange-300 border w-full">
                {currentSection === 1 && (
                    <h4>revenue list</h4>
                )}
                {currentSection === 2 && (
                    <ProductionRecordTable/>    
                )}
                {currentSection === 3 && (
                    <BarChart data={productRecords} />
                )}
                {currentSection === 4 && (
                    <PieChart/>
                )}
                
            </div>
        </div>
     );
}
 
export default Homepage;