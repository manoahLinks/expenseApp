import React, { useState } from "react";
import ProductionDashboard from "../productPages/components/ProductionDashboard";
import ProductList from '../productPages/ProductList'
import ProductForm from '../productPages/ProductsForm'

const Products = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }

    return ( 
        <div className="flex flex-col gap-y-4">
            <div className='md:p-3 p-2 text-xs bg-white grid grid-cols-4 modal shadow items-center md:gap-y-2 gap-x-1 border-b'>
                <span onClick={()=>{handleClick(1)}} className={`${activeTab === 1 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <h4 className="hidden md:block">Dashboad</h4>
                </span>
                <span onClick={()=>{handleClick(2)}} className={`${activeTab === 2 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                    <h4 className="hidden md:block">create product</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`${activeTab === 3 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <h4 className="hidden md:block">View products</h4>
                </span>
                <span onClick={()=>{handleClick(4)}} className={`${activeTab === 4 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <h4 className="">Assign to production</h4>
                </span>
            </div>
            <div className="p-5 w-9/12 self-center">

                {currentSection === 1 && ( 
                    <ProductionDashboard />
                )}

                {currentSection === 2 && ( 
                   <ProductForm/>
                )}

                {currentSection === 3 && ( 
                    <ProductList/>
                )}

                {currentSection === 4 && ( 
                    <h4>update info</h4>
                )}
            </div>
        </div>
     );
}
 
export default Products;