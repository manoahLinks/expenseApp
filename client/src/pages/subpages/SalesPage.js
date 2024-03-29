import React, { useState } from "react"
import { Link } from "react-router-dom"
import SalesDashbord from "../sales/SalesDashboard"
import BankDepositForm from "../sales/components/BankDepositForm"
import SalesForm from "../sales/SalesForm"

const SalesPage = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)
        const [bankDepositForm, setBankDepositForm] = useState(false)
        const [salesForm, setSalesForm] = useState(false)

        const modalOff = () => {
            setBankDepositForm(false)
            setSalesForm(false)
        }
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
                <div className="flex items-center gap-x-4">
                    <button onClick={()=> {setSalesForm(true)}} className="flex p-1 bg-green-300 text-green-900 gap-x-2 items-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <small>new sale</small>
                    </button>
                    <button onClick={()=>{setBankDepositForm(true)}} className="flex p-1 bg-amber-300 text-amber-900 gap-x-2 items-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        <small>Deposit to Bank</small>
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
            {bankDepositForm && <BankDepositForm modalOff={modalOff}/>}
            {salesForm && <SalesForm modalOff={modalOff}/>}
        </div>
     );
}
 
export default SalesPage;