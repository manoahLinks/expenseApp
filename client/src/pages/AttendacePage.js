import React, { useState } from "react";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AttendancePage = ({modalOff}) => {

    const handlePresent = () => {
        if (navigator.geolocation) {
            console.log(navigator.geolocation.getCurrentPosition(findLocation));
          } 
      
          function findLocation(position) {
              if(position.coords.latitude === 9.0764785 && position.coords.longitude === 7.398574){
                    toast.success(`Welcome once again, your attendance stats has been successfully recorded`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
              }
              else{
                toast.warn('Your location doesnt match what you cliam', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
              }
            }  
    }

    const handleAbsent = () => {
        toast.error('Dear user we hope you are doing great, hope to see you at work soon!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return ( 
        <div className="flex flex-col inset-0 fixed bg-primary bg-opacity-10 items-center justify-center gap-y-4">
            <div className="flex flex-col items-center justify-center gap-y-4 bg-white md:p-5 p-3 rounded-lg shadow-lg">
                <div className="flex">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
                <h4 className="text-left p-2">Hello dear Employee, its great to have you around ;</h4>
                <div className="bg-purple-200 shadow p-2 rounded-full">
                    {<img src={require(`../assets/icons8-user-male-100.png`)} alt="" />}
                </div>

                <div className="grid grid-cols-1 gap-y-3">
                    <h4>Select Attendance status:</h4>
                    <button onClick={handlePresent} className="text-sm font-semibold bg-green-200 p-2 rounded-md">Present</button>
                    <button onClick={handleAbsent} className="text-sm font-semibold bg-red-200 p-2 rounded-md">Absent</button>
                    <button className="text-sm font-semibold bg-amber-200 p-2 rounded-md">sick</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
     );
}
 
export default AttendancePage;