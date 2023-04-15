import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountForm from "../Accounts/AccountForm";
import AccountList from "../Accounts/AccountList";
import FinanceDashboard from "../financePages/FinanceDashboard";
import SupplierList from "../suppliers/SuppliersList";

const Finance = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)
    const [accountForm, setAccountForm] = useState(false)

    const modalOff = () => {
        setAccountForm(false)
    }

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    return ( 
        <div className="flex flex-col ">
            <div className="flex justify-between p-3 bg-white">
                <div className='flex items-center overflow-x-scroll md:overflow-x-hidden'>
                    <Link to={`/home`} className="flex p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <h4 className="text-lg font-semibold">Accounts</h4>  
                </div>
                <div className="flex">
                    <button onClick={()=>{setAccountForm(true)}} className="flex items-center p-1 bg-cyan-400 rounded-lg text-white font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <small>create new account</small>
                    </button>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 mb-auto">
               {currentSection === 1 && ( 
                    <AccountList />
                )}

               {currentSection === 2 && ( 
                   <FinanceDashboard/>
                )}

               {currentSection === 3 && ( 
                    <AccountList />
                )}

               {currentSection === 4 && ( 
                   <SupplierList/>
                )}

               {currentSection === 5 && ( 
                    <h4>dashboard 5</h4>
                )}
            </div>
            {accountForm && <AccountForm modalOff={modalOff}/>}
        </div>
     );
}
 
export default Finance;