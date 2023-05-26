import React from "react";
const LoadingPage = () => {
    return ( 
        <div className="fixed inset-0 justify-center items-center bg-opacity-60 bg-gray-50 flex flex-col">
            <div className='rounded-md p-5'>
                <img src={require(`../assets/icons8-sand-timer.gif`)} alt="" />
            </div>

        </div>
     );
}
 
export default LoadingPage;