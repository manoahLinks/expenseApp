import React, { useState } from "react";
import AttendancePage from '../AttendacePage'
import ProductionChart from "../productPages/components/ProductionChart";

const MyProfile = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    return ( 
        <div className="flex flex-col gap-y-4">
            <div className='md:p-3 p-2 text-xs grid grid-cols-4 items-center md:gap-y-2 gap-x-1 border-b'>
                <span onClick={()=>{handleClick(1)}} className={`${activeTab === 1 ? `shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]` :``} shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] cursor-pointer md:py-2 py-1 justify-center rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 1 ? `-rotate-12`: ``}`}>
                         <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                    </svg>
                    <h4>Dashboad</h4>
                </span>
                <span onClick={()=>{handleClick(2)}} className={`${activeTab === 2 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 2 ? `-rotate-12`: ``}`}>
                        <path fillRule="evenodd" d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <h4>Attendance</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`${activeTab === 3 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 3 ? `-rotate-12`: ``}`}>
                        <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" />
                        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                    </svg>
                    <h4>Job description</h4>
                </span>
                <span onClick={()=>{handleClick(4)}} className={` ${activeTab === 4 ? `bg-primary text-white` : ``} cursor-pointer md:py-2 hover:bg-primary hover:text-white py-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 4 ? `-rotate-12`: ``}`}>
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    <h4>Email</h4>
                </span>
            </div>
            <div className="p-5 rounded-md shadow">

                {currentSection === 1 && ( 
                    <h4>dashboard</h4>
                )}

                {currentSection === 2 && ( 
                    <AttendancePage/>
                )}

                {currentSection === 3 && ( 
                    <ProductionChart />
                )}

                {currentSection === 4 && ( 
                    <h4>update info</h4>
                )}
            </div>
        </div>
     );
}
 
export default MyProfile;