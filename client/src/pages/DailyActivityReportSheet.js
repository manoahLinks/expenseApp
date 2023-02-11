import React, {useState} from "react";

const DailyActivityReportSheet = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)

    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    return ( 
        <div className="flex flex-col">
            <div className='md:p-5 p-2 overflow-x-auto justify-evenly text-xs border-b flex items-center gap-x-2 border-b'>
                <span className="md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                         <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
                    </svg>
                    <h4>Quick activity</h4>
                </span>
                <span onClick={()=>{handleClick(1)}} className={`${ activeTab == 1 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M3.28 2.22a.75.75 0 00-1.06 1.06L5.44 6.5H2.75a.75.75 0 000 1.5h4.5A.75.75 0 008 7.25v-4.5a.75.75 0 00-1.5 0v2.69L3.28 2.22zM13.5 2.75a.75.75 0 00-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-2.69l3.22-3.22a.75.75 0 00-1.06-1.06L13.5 5.44V2.75zM3.28 17.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 101.06 1.06zM13.5 14.56l3.22 3.22a.75.75 0 101.06-1.06l-3.22-3.22h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-2.69z" />
                    </svg>
                    <h4 className="">Production</h4>
                </span>
                        <span onClick={()=>{handleClick(2)}} className={`${ activeTab == 2 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <h4>sales</h4>
                </span>
                <span onClick={()=>{handleClick(3)}} className={`${ activeTab == 3 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                    <h4 >cash</h4>
                </span>
                    <span onClick={()=>{handleClick(4)}} className={`${ activeTab == 4 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
                    </svg>
                    <h4>Expenses</h4>
                </span>
                <span onClick={()=>{handleClick(5)}} className={`${ activeTab == 5 ? `bg-primary text-white` : `bg-white`} md:p-2 hover:bg-primary font-semibold hover:text-white hover:font-semibold p-1 justify-center border rounded flex gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    
                    <h4>Analytics</h4>
                </span>
            </div>
            <form className="p-5 grid grid-cols-1 justify-items-center">
                {currentSection === 1 && ( 
                    <div className="gap-y-4 grid grid-cols-1">
                        
                        <table className="table table-auto w-full text-left border-collapse">
                            <thead>
                                <tr className="border-t grid grid-cols-4 gap-x-4">
                                    <th className="px-4 py-2">Product Type</th>
                                    <th className="px-4 py-2">Qty produced</th>
                                    <th className="px-4 py-2">unit price</th>
                                    <th className="px-4 py-2">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border grid grid-cols-4 gap-x-4 p-1">
                                    <input className="text-xs border-slate-300 rounded" type="text" name="" id="" />
                                    <input className="text-xs border-slate-300 rounded" type="number" name="" id="" />
                                    <input className="text-xs border-slate-300 rounded" type="number" name="" id="" />
                                    <input className="text-xs border-slate-300 rounded" type="number" name="" id="" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 2 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section2</h4>
                    </div>
                )}

                {currentSection === 3 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section3</h4>
                    </div>
                )}

                {currentSection === 4 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section4</h4>
                    </div>
                )}

                {currentSection === 5 && ( 
                    <div className="grid grid-cols-1">
                        <h4>Section5</h4>
                    </div>
                )}
            </form>
        </div>
     );
}
 
export default DailyActivityReportSheet;