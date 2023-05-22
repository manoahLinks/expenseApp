import React, {useState} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Sidebar from "./Sidebar";

const NavBar = () => {

    const {user} = useAuthContext()
    const [sidebar, setSidebar] = useState(false)
    
    const {logOut} = useLogout()

    const handleLogout = () => {
        logOut()
    }

    const toggleSidebar = () => {
      if(!sidebar){
        setSidebar(true)
      }
      else{
        setSidebar(false)
      }
    }

    return ( 
        <div className='fixed top-0 z-10 bg-white shadow w-full flex justify-between md:p-5 p-2'>
            <div className='flex items-center gap-x-2'>
              <div onClick={toggleSidebar} className="flex md:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
              <h4 className="font-bold md:text-lg text-sm">SMART WORK</h4>
            </div>
            <div className='flex items-center'>
              <div className="gap-x-4 flex items-center">
                <div className="flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <small className="text-center -mx-2 -mt-2 m-auto bg-red-500 w-4 h-4 text-white text-xs rounded-full px-0.5">{0}</small>
                </div>

                <div className="flex relative">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  <small className="text-center -mx-2 -mt-2 m-auto bg-red-500 w-4 h-4 text-white text-xs rounded-full px-0.5">{0}</small>
                </div>
                <div className="flex relative">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <small className="text-center -mx-2 -mt-2 m-auto bg-red-500 w-4 h-4 text-white text-xs rounded-full px-0.5">{0}</small>
                </div>
              </div>
            </div>
            {sidebar && <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />}
        </div>
     );
}
 
export default NavBar;
