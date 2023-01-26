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
        <div className='flex justify-between md:p-2 p-1 bg-gray-200 border-b'>
            <div className='flex'>
              {user && <img src={require(`../assets/icons8-user-male-100.png`)} alt="pic1" className='w-12 h-12 mx-2 rounded-full object-cover' />}
              <div className='flex flex-col justify-center'>
                {user && <h4 className="font-semibold">Manoah</h4>}
              {user && <h6 className="font-light">{user.email}</h6>}
              </div>
            </div>
            <div className='flex items-center'>

              {user && <div onClick={handleLogout} className="p-1 font-semibold border text-white font-semibold bg-green-500 rounded-lg shadow">
                <h4>Logout</h4>
              </div>}
            </div>
        </div>
     );
}
 
export default NavBar;
