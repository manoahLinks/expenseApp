import React, { useState } from "react"
import { Link } from "react-router-dom"
import SalesDashbord from "../sales/SalesDashboard"

const SalesPage = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }
    return ( 
        <div className="flex flex-col h-96">
            <div className="flex justify-between p-3 bg-white">
                <div className='text-xs flex items-center'>
                    <Link to={`/home`} className="flex p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <h4 className="text-lg font-bold">sales</h4>
                </div>
                <div className="flex">
                    <button className="flex p-1 bg-orange-300 text-orange-900 gap-x-2 items-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <small>new sale</small>
                    </button>
                </div>

                
            </div>
            <hr />
            <div className="p-3 bg-slate-50">

                {currentSection === 1 && ( 
                    <SalesDashbord/>
                )}

                {currentSection === 2 && ( 
                   <h4>section2</h4>
                )}

            </div>
        </div>
     );
}
 
export default SalesPage;