import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {

  const {user} = useAuthContext()

  const {logOut} = useLogout()

  const handleLogout = () => {
    logOut()
  }

    return ( 
        <div className='fixed top-0 z-10 shadow w-full flex justify-between md:p-2 p-1 border-b'>
            <div className='flex items-center'>
              <h4 className="font-bold text-md text-primary">SMART WORK</h4>
            </div>
            <div className='flex items-center'>

              {user && <div onClick={handleLogout} className="p-1 border bg-primary items-center text-xs flex gap-x-2 text-white rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                  <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                </svg>
                <h4>Logout</h4>
              </div>}
            </div>
        </div>
     );
}
 
export default NavBar;
