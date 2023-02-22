import React, { useState } from "react";
import RawmaterialList from "../rawmaterialpages/RawmaterialList";
import RawmaterialForm from "../rawmaterialpages/RawmaterialForm"

const RawMaterials = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }

    return ( 
        <div className="flex flex-col gap-y-4">
           <div className='md:p-3 p-2 text-xs grid grid-cols-4 items-center overflow-x-scroll md:gap-y-2 gap-x-1 border-b'>
                <span onClick={()=>{handleClick(1)}} className={`${activeTab === 1 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                    <h4>new rawmaterial</h4>
                </span>
                <span onClick={()=>{handleClick(2)}} className={`${activeTab === 2 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <h4>recieve materials</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`${activeTab === 3 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                    <h4>Viewmaterials</h4>
                </span>
                <span onClick={()=>{handleClick(4)}} className={`${activeTab === 4 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <h4>Analytics</h4>
                </span>
            </div>
            <div className="p-5 rounded-md shadow">

                {currentSection === 1 && ( 
                    <RawmaterialForm />
                )}

                {currentSection === 2 && ( 
                    <h4>section2</h4>
                )}

                {currentSection === 3 && ( 
                    <RawmaterialList />
                )}

                {currentSection === 4 && ( 
                    <h4>update info</h4>
                )}
            </div>  
        </div>
     );
}
 
export default RawMaterials;