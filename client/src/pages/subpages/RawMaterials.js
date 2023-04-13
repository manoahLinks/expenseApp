import React, { useState } from "react";
import { Link } from "react-router-dom";
import RawmaterialList from "../rawmaterialpages/RawmaterialList";
import RawmaterialForm from "../rawmaterialpages/RawmaterialForm"
import RawMaterialAnalytics from "../AnalysisPages/RawMaterialAnalytics";
import RecieveRawmaterial from "../rawmaterialpages/RecieveRawmaterial";
import SuppliesList from "../rawmaterialpages/supplies/SuppliesList";
import RawmaterialTable from "../rawmaterialpages/component/Rawmaterialtable";

const RawMaterials = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }

    return ( 
        <div className="flex flex-col">
            <div className="grid gris-cols-1 p-3 gap-y-2 bg-white">
                <div className="flex justify-between ">
                    <div className='text-xs flex items-center'>
                        <Link to={`/home`} className="flex p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h4 className="font-bold text-lg">Rawmaterials</h4>
                    </div> 
                    <div className="flex items-center">
                        <button className="p-1 bg-blue-500 text-white rounded-lg flex gap-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <small>Create new rawmaterial</small>
                        </button>
                    </div>
                </div>

                <div className="bg-slate-100 border border-slate-300 md:p-5 p-2 rounded-lg">
                    <p>All raw materials can be created and manage here</p>
                </div>
            </div>
            
            <hr />          
            <div className="">

                {currentSection === 1 && ( 
                    <RawmaterialList/>
                )}

                {currentSection === 2 && ( 
                      <SuppliesList/>
                )}

                {currentSection === 3 && ( 
                    <RawmaterialList />
                )}

                {currentSection === 4 && ( 
                    <RawMaterialAnalytics/>
                )}
                {currentSection === 5 && ( 
                    <div>something2</div>   
                )}
                
            </div>  
        </div>
     );
}
 
export default RawMaterials;