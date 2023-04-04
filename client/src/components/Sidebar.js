import React, {useState} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import {Link} from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(1)
    const {user} = useAuthContext()

    const toggleBody = () => {
        activeTab !== 3 ? setActiveTab(3) : setActiveTab(null)
    }

    const {logOut} = useLogout()

    const handleLogout = () => {
        logOut()
    }

    return ( 
        <div className={`md:w-2/12 fixed bg-white h-screen grid grid-cols-1 hidden md:block w-9/12`}>
            
            <div className="flex flex-col gap-y-2 mt-5 ">
                <Link to={`/`}  onClick={()=> {setActiveTab(1)}} className={`${activeTab === 1 ? `bg-primary bg-opacity-10` : ``} flex gap-x-4 items-center p-2 rounded hover:bg-primary hover:bg-opacity-20`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 1 ? `fill-green-400`: `fill-slate-300 `}`}>
                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                    </svg>
                    <h4>Dashboard</h4>
                </Link>
                <Link to={`/myprofile`} onClick={()=> {setActiveTab(2)}} className={`${activeTab === 2 ? `bg-primary bg-opacity-10` : ``} flex gap-x-4 items-center p-2 rounded hover:bg-primary hover:bg-opacity-20`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 2 ? `fill-green-400`: `fill-slate-300 `}`}>
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                    <h4>My Profile</h4>
                </Link>
                <Link onClick={toggleBody} className={` ${activeTab === 3 || activeTab === 31 || activeTab === 32 || activeTab === 33 || activeTab === 34 ? `bg-primary bg-opacity-10` : ``} flex justify-between p-3 items-baseline rounded hover:bg-primary hover:bg-opacity-20`}>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${activeTab === 3 || activeTab === 31 || activeTab === 32 || activeTab === 33 || activeTab === 34 ? `fill-green-400`: `fill-slate-300 `} `}>
                            <path fillRule="evenodd" d="M18 5.25a2.25 2.25 0 00-2.012-2.238A2.25 2.25 0 0013.75 1h-1.5a2.25 2.25 0 00-2.238 2.012c-.875.092-1.6.686-1.884 1.488H11A2.5 2.5 0 0113.5 7v7h2.25A2.25 2.25 0 0018 11.75v-6.5zM12.25 2.5a.75.75 0 00-.75.75v.25h3v-.25a.75.75 0 00-.75-.75h-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H3zm6.874 4.166a.75.75 0 10-1.248-.832l-2.493 3.739-.853-.853a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.154-.114l3-4.5z" clipRule="evenodd" />
                        </svg>
                        <h4 className="mx-2">DailyActivity</h4>
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={` w-4 h-4  ${activeTab === 3 || activeTab === 31 || activeTab === 32 || activeTab === 33 || activeTab === 34 ? `fill-green-400 text-slate-300 rotate-90`: ``}`}>
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
                <div className={`${activeTab === 3 || activeTab === 31 || activeTab === 32 || activeTab === 33 || activeTab === 34  ? `block `: `hidden`} grid grid-cols-1 p-2`}>
                    <Link to={`/product`} onClick={()=>{setActiveTab(31)}} className={`border-l-2 transition ease-in-out duration-300 flex gap-x-2 ${activeTab === 31 ? ` border-l-2 border-green-400` : ``} hover:border-green-400 p-2 items-center`}>
                        <h4>Production</h4>
                    </Link>
                    <Link to={`/sales`} onClick={()=>{setActiveTab(32)}} className={`border-l-2 transition ease-in-out duration-300  flex gap-x-2 ${activeTab === 32 ? `border-l-2 border-green-400` : ``}  hover:border-green-400 p-2 items-center`}>
                        <h4>Sales & dispatch</h4>
                    </Link>
                    <Link to={`/rawmaterial`} onClick={()=>{setActiveTab(33)}} className={`transition ease-in-out duration-300 border-l-2 transition flex gap-x-2 ${activeTab === 33 ? `border-l-2 border-green-400` : ``}  hover:border-green-400 p-2  items-center`}>
                        <h4>Store</h4>
                    </Link>
                    <Link to={`/dbar`} onClick={()=>{setActiveTab(34)}} className={`transition ease-in-out duration-300 border-l-2 transition flex gap-x-2 ${activeTab === 34 ? `border-l-2 border-green-400` : ``}  hover:border-green-400 p-2  items-center`}>
                        <h4>Daily summary</h4>
                    </Link>
                </div>
                <Link to={`/marketing`}  onClick={()=> {setActiveTab(6)}} className={`${activeTab === 6 ? `bg-primary bg-opacity-10` : ``} flex gap-x-4 items-center p-2 rounded hover:bg-primary hover:bg-opacity-20`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-slate-300 ${activeTab === 6 ? `fill-green-400`: ``}`}>
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                    </svg>
                    <h4>Marketing</h4>
                </Link>
                <Link to={`/finance`}  onClick={()=> {setActiveTab(4)}} className={`${activeTab === 4 ? `bg-primary bg-opacity-10` : ``} flex gap-x-4 items-center p-2 rounded hover:bg-primary hover:bg-opacity-20`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-slate-300 ${activeTab === 4 ? `fill-green-400`: ``}`}>
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                    <h4>Finance</h4>
                </Link>
                <Link to={`/analytics`} onClick={()=> {setActiveTab(5)}} className={`${activeTab === 5 ? `bg-primary bg-opacity-10` : ``} flex gap-x-4 items-center p-2 rounded hover:bg-primary hover:bg-opacity-20`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-slate-300 ${activeTab === 5 ? `fill-green-400`: ``}`}>
                        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    <h4>Analytics</h4>
                </Link>
                
            </div>

            {user && <div className="flex flex-col gap-y-2 p-3 bg-slate-100 shadow">
                <div onClick={handleLogout} className="cursor-pointer text-xs flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                    </svg>
                    <h4>Logout</h4>
                </div>

                <div className="cursor-pointer">
                    <h4>About us</h4>
                </div>
            </div>}
            
        </div>
     );
}
 
export default Sidebar;