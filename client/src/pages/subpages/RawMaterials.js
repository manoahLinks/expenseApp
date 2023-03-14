import React, { useState } from "react";
import { Link } from "react-router-dom";
import RawmaterialList from "../rawmaterialpages/RawmaterialList";
import RawmaterialForm from "../rawmaterialpages/RawmaterialForm"
import RawMaterialAnalytics from "../AnalysisPages/RawMaterialAnalytics";
import RecieveRawmaterial from "../rawmaterialpages/RecieveRawmaterial";
import SuppliesList from "../rawmaterialpages/supplies/SuppliesList";

const RawMaterials = () => {

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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-300 hover:text-green-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    
                    <span onClick={()=>{handleClick(1)}} className={`flex p-2 ${activeTab === 1 ? `border-b-2 border-green-400` :``} p-2 border-b-2 cursor-pointer `}>
                        <h4>Dashboard</h4>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className={`flex p-2 ${activeTab === 2 ? `border-b-2 border-green-400` : ``} p-2 border-b-2 cursor-pointer`}>
                        <h4>Admin</h4>
                    </span>    
                </div>
            </div>
          
            <div className="">

                {currentSection === 1 && ( 
                   <RawmaterialList /> 
                )}

                {currentSection === 2 && ( 
                    <div>something2</div>
                )}

                {currentSection === 3 && ( 
                    <RawmaterialList />
                )}

                {currentSection === 4 && ( 
                    <RawMaterialAnalytics/>
                )}
                {currentSection === 5 && ( 
                    <SuppliesList/>   
                )}
                
            </div>  
        </div>
     );
}
 
export default RawMaterials;