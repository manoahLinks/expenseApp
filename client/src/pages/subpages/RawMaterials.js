import React, { useState } from "react";
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
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow ">
                <div className='md:p-3 p-2 md:col-span-2 md:overflow-x-hidden justify-evenly  overflow-x-scroll w-auto  text-xs flex items-center  md:gap-y-2 gap-x-1'>
                    <span onClick={()=>{handleClick(1)}} className={`whitespace-nowrap w-auto ${activeTab === 1 ? `bg-primary text-white` : ``} cursor-pointer p-1 justify-center rounded flex gap-x-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                        </svg>
                        <h4>blank</h4>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className={`whitespace-nowrap ${activeTab === 2 ? `bg-primary text-white` : ``} cursor-pointer p-2 hover:bg-primary hover:text-white justify-center rounded flex gap-x-2`}>
                        <h4>blank</h4>
                    </span>
                    <span onClick={()=>{handleClick(3)}} className={`whitespace-nowrap ${activeTab === 3 ? `bg-primary text-white` : ``} cursor-pointer py-1 px-2 hover:bg-primary hover:text-white justify-center rounded flex gap-x-2`}>
                        <h4>Raw materials</h4>
                    </span>
                    <span onClick={()=>{handleClick(4)}} className={`whitespace-nowrap ${activeTab === 4 ? `bg-primary text-white` : ``} cursor-pointer py-1 px-2 hover:bg-primary hover:text-white justify-center rounded flex gap-x-2`}>
                        <h4>Analytics</h4>
                    </span>
                    <span onClick={()=>{handleClick(5)}} className={`whitespace-nowrap ${activeTab === 5 ? `bg-primary text-white` : ``} cursor-pointer py-1 px-2 hover:bg-primary hover:text-white  justify-center rounded flex gap-x-2`}>
                        <h4>suppliesList</h4>
                    </span>
                </div>
                <div className="grid">

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