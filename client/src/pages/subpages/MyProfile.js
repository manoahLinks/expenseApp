import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AttendancePage from '../AttendacePage'
import UserDashboard from "../profile/userDashboard";
import UserList from "../profile/UserList";
import AssignRole from "../profile/AssignRole";
import UserInvite from "../profile/components/UserInvite";

const MyProfile = () => {

    const [currentSection, setCurrentSection] = useState(1)
    const [activeTab, setActiveTab] = useState(1)
    const [attendancePage, setAttendancePage] = useState(false)
    const [userInvitePage, setUserInvitePage] = useState(false)


    const handleClick = (section) => {
        setCurrentSection(section)
        setActiveTab(section)
    }

    const modalOn = () => {
        setAttendancePage(true)
    }
    const modalOff = () =>{
        setAttendancePage(false)
        setCurrentSection(1)
        setActiveTab(1)
    }

    return ( 
        <div className="flex flex-col">
            <div className="flex justify-between md:overflow-x-hidden overflow-x-scroll p-3 bg-white">
                <div className='flex items-center '>
                    <Link to={`/home`} className="flex p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <h4  className="font-semibold text-lg">Staff</h4> 
                </div>

                <div className="flex justify-end md:gap-x-4 gap-x-2">
                    <span onClick={()=>{setUserInvitePage(true)}} className="flex items-center whitespace-nowrap gap-x-2 border py-1 px-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 file-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <small>Invite a new team member</small>
                    </span>

                    <span onClick={()=>{handleClick(3)}} className="flex items-center text-white bg-gray-700 font-bold whitespace-nowrap gap-x-2 py-1 px-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <small>Assign user role</small>
                    </span>
                    <span onClick={()=>{handleClick(2)}} className="flex items-center whitespace-nowrap gap-x-2 border border-slate-200 py-1 px-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <small>userList</small>
                    </span>
                </div>
            </div>
            <hr />
            <div className="">
                {currentSection === 1 && ( 
                    <UserDashboard modalOn={modalOn} />
                )}

                {currentSection === 2 && ( 
                    <UserList/>
                )}

                {currentSection === 3 && ( 
                    <AssignRole modalOff={modalOff}/>
                )}

            </div>
            {attendancePage && <AttendancePage modalOff={modalOff} /> }
            {userInvitePage && <UserInvite/>}
        </div>
     );
}
 
export default MyProfile;