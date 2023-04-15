import React, { useState } from "react";
import AlertBox from "../components/AlertBox";

const AttendancePage = ({modalOff}) => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)

    const handlePresent = () => {
        if (navigator.geolocation) {
            console.log(navigator.geolocation.getCurrentPosition(findLocation));
          } 
      
          function findLocation(position) {
              if(position.coords.latitude === 9.0764785 && position.coords.longitude === 7.398574){
                  setError(false)
                  setSuccess(true)
                  setMessage('Welcome once again, your attendance stats has been successfully recorded')
              }
              else{
                setSuccess(false)
                setError(true)
                setMessage('Your location doesnt match what you cliam')
              }
            }  
    }

    const handleAbsent = () => {
        
        setError(false)
        setSuccess(true)
        setMessage('Dear user we hope you are doing great, hope to see you at work soon')
    }

    return ( 
        <div className="flex flex-col inset-0 fixed bg-primary bg-opacity-10 items-center justify-center gap-y-4">
            <div className="flex flex-col items-center justify-center gap-y-4 bg-white md:p-5 p-3 rounded-lg shadow-lg">
                {error && <AlertBox message={message}></AlertBox>}
                {success && <AlertBox message={message}></AlertBox> }
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
        </div>
     );
}
 
export default AttendancePage;