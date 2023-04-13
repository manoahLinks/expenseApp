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
        <div className='fixed top-0 z-10 bg-white shadow w-full flex justify-between md:p-3 p-2'>
            <div className='flex items-center gap-x-2'>
              <div onClick={toggleSidebar} className="flex md:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
              <h4 className="font-bold md:text-lg text-sm">SMART WORK</h4>
            </div>
            <div className='flex items-center'>

              <div className="gap-x-2 flex items-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                
              </div>
              {sidebar && <Sidebar sidebar={sidebar}  />}
            </div>
        </div>
     );
}
 
export default NavBar;
