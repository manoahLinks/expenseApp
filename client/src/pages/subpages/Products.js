import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductionDashboard from "../productPages/components/ProductionDashboard";
import ProductList from '../productPages/ProductList'
import ProductForm from '../productPages/ProductsForm'
import ProductionRecordForm from "../productPages/components/ProductionRecordForm";

const Products = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)
        const [productForm, setProductForm] = useState(false)
        const [productionRecordForm, setProductionRecordForm] = useState(false)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }

        const modalOff = () => {
            setProductForm(false)
            setProductionRecordForm(false)
        }

    return ( 
        <div className="flex flex-col h-96">
            <div className="flex flex-col gap-y-4 md:p-5 p-2">
                <div className="flex items-center justify-between overflow-x-scroll md:overflow-x-hidden">
                    <div className='flex'>
                        <Link to={`/home`} className="flex p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h4 className="text-lg font-bold">Products</h4>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <span onClick={()=>{setProductionRecordForm(true)}} className="whitespace-nowrap flex text-orange-300 border border-orange-400 font-semibold items-center gap-x-2 p-1 rounded-md cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <small>record production</small>
                        </span>
                        <span onClick={()=>{handleClick(3)}} className="whitespace-nowrap flex bg-orange-300 text-orange-900 font-semibold items-center gap-x-2 p-1 text-white rounded-md cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <small>create new product</small>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:p-5 border bg-slate-100 rounded-lg">
                    <p>Products can be created and managed here, any product created can be used for slaes and production purposes and records are properly documented </p>
                </div>
            </div>
            
            <hr />
            <div className="bg-slate-50">

                {currentSection === 1 && (
                    <ProductList/> 
                    
                )}

                {currentSection === 2 && ( 
                    <ProductionDashboard />
                )}

                {currentSection === 3 && ( 
                    <ProductForm modalOff={modalOff}/>
                )}

            </div>
            {productForm && <ProductForm modalOff={modalOff}/>}
            {productionRecordForm && <ProductionRecordForm modalOff={modalOff}/>}
        </div>
     );
}
 
export default Products;