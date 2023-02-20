import React, { useState } from "react";
import AlertBox from "../components/AlertBox";

const AttendancePage = () => {

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
        <div className="flex flex-col items-center justify-center gap-y-4">
            {error && <AlertBox message={message}></AlertBox>}
            {success && <AlertBox message={message}></AlertBox> }
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
     );
}
 
export default AttendancePage;