import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {

  const {user} = useAuthContext()

    return ( 
        <div className='fixed top-0 z-10 bg-white w-full flex justify-between md:p-2 p-1 shadow'>
            <div className='flex items-center'>
              <h4 className="font-bold text-md text-primary">SMART WORK</h4>
            </div>
            <div className="flex">
              
            </div>
            <div className='flex items-center'>

              <div className="gap-x-2 flex items-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <div className="flex items-center gap-x-2 p-1 shadow rounded">
                  <div className="p-1 rounded-full border border-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                      </svg>
                  </div>
                  {user && <h4>{user.email}</h4>}
              </div>
              </div>

              
            </div>
        </div>
     );
}
 
export default NavBar;
