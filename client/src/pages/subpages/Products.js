import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col">
            <div className="grid grid-cols-2 p-3 bg-white">
                <div className='text-xs flex items-center'>
                    <Link to={`/home`} className="flex p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <span onClick={()=>{handleClick(1)}} className={`flex p-2 ${activeTab === 1 ? `border-b-2 border-green-400` :``} p-2 border-b-2 cursor-pointer `}>
                        <h4>Dashboard</h4>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className={`flex p-2 ${activeTab === 2 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>Admin</h4>
                    </span> 
                    <span onClick={()=>{handleClick(3)}} className={`flex p-2 ${activeTab === 3 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>create product</h4>
                    </span>    
                </div>
            </div>
            <div className="">

                {currentSection === 1 && ( 
                    <ProductionDashboard />
                )}

                {currentSection === 2 && ( 
                    <ProductList/>
                )}

                {currentSection === 3 && ( 
                    <ProductForm/>
                )}

                {currentSection === 4 && ( 
                    <h4>update info</h4>
                )}
            </div>
        </div>
     );
}
 
export default Products;