import React, { useState } from "react";
import CustomerList from "../marketing/CustomerList";
import CustomerForm from '../marketing/CustomerForm';

const Marketing = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    return ( 
        <div className="flex flex-col">
          <div className='p-2 overflow-x-auto justify-evenly text-xs border-b flex items-center gap-x-2'>
                <span className={`md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4`}>
                         <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                    </svg>
                    <h4>Quick activity</h4>
                </span>
                <span onClick={()=>{handleClick(1)}} className={`cursor-pointer transition ease-in-out duration-150 ${ activeTab === 1 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 1 ? `-rotate-12` : ``}`}>
                        <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                    </svg>
                    <h4 className="">new customer</h4>
                </span>
                <span onClick={()=>{handleClick(2)}} className={`cursor-pointer transition ease-in-out duration-150 ${ activeTab === 2 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 2 ? `-rotate-12` : ``}`}>
                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <h4>Order</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`cursor-pointer transition ease-in-out duration-150 ${ activeTab === 3 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 3 ? `-rotate-12` : ``}`}>
                        <path fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z" clipRule="evenodd" />
                    </svg>
                    <h4 >Schedules</h4>
                </span>
                    <span onClick={()=>{handleClick(4)}} className={`cursor-pointer transition ease-in-out duration-150 ${ activeTab === 4 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 4 ? `-rotate-12` : ``}`}>
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                    </svg>
                    <h4>Customers</h4>
                </span>
                
                <span onClick={()=>{handleClick(5)}} className={`cursor-pointer transition ease-in-out duration-150 ${ activeTab === 5 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 items-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3 h-3 ${ activeTab === 5 ? `-rotate-12` : ``}`}>
                        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    
                    <h4>Analytics</h4>
                </span>
            </div>
            
          <div className="grid grid-cols-1 p-5">
               {currentSection === 1 && (
                    <CustomerForm />
                )}

                {currentSection === 2 && (
                    <h4>section 1</h4>
                )}

                {currentSection === 3 && (
                    <h4>section 1</h4>
                )}

                {currentSection === 4 && (
                    <CustomerList />
                )}

               {currentSection === 5 && (
                    <h4>section 1</h4>
                )}
          </div>
        </div>
     );
}
 
export default Marketing;