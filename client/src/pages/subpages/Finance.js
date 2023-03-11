import React, { useState } from "react";
import Transactions from "../../components/Transactions";
import AccountList from "../Accounts/AccountList";
import FinanceDashboard from "../financePages/FinanceDashboard";
import SupplierList from "../suppliers/SuppliersList";

const Finance = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    return ( 
        <div className="flex flex-col gap-y-4">
          <div className='p-2 shadow overflow-x-auto justify-evenly bg-white text-xs border-b flex items-center gap-x-1'>
                <span className={`cursor-pointer hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4`}>
                         <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                    </svg>
                    <h4>Quick activity</h4>
                </span>
                <span onClick={()=>{handleClick(1)}} className={`cursor-pointer ${ activeTab === 1 ? `bg-primary text-white` : `bg-white`} hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-2 h-2 ${ activeTab === 1 ? `-rotate-12` : ``}`}>
                         <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
                    </svg>
                    <h4 className="">Accounts</h4>
                </span>
                <span onClick={()=>{handleClick(2)}} className={`cursor-pointer ${activeTab === 2 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 2 ? `-rotate-12` : ``}`}>
                         <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
                         <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <h4>Suppliers</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`cursor-pointer ${ activeTab === 3 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 3 ? `-rotate-12` : ``}`}>
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                    <h4 >Expenditures</h4>
                </span>
                <span onClick={()=>{handleClick(4)}} className={`cursor-pointer ${activeTab === 4 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 stroke-3 ${ activeTab === 4 ? `-rotate-12` : ``}`}>
                         <path fillRule="evenodd" d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z" clipRule="evenodd" />
                    </svg>
                    <h4>Transactions</h4>
                </span>
                <span onClick={()=>{handleClick(5)}} className={`cursor-pointer ${activeTab === 5 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 5 ? `-rotate-12` : ``}`}>
                        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    <h4>Analytics</h4>
                </span>
            </div>
            <div className="grid grid-cols-1">
               {currentSection === 1 && ( 
                    <FinanceDashboard/>
                )}

               {currentSection === 2 && ( 
                    <SupplierList/>
                )}

               {currentSection === 3 && ( 
                    <AccountList />
                )}

               {currentSection === 4 && ( 
                    <Transactions/>
                )}

               {currentSection === 5 && ( 
                    <h4>dashboard 5</h4>
                )}
            </div>
        </div>
     );
}
 
export default Finance;