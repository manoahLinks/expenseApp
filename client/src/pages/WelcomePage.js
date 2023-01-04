import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return ( 
        <div className="h-screen flex flex-col bg-purple-100 gap-y-5 items-center justify-center">
           <div className="rounded-full p-2 animate-bounce">
                {<img className='rounded-full w-32' src={require('../assets/icons8-payment-history-100.png')} alt="" />}
           </div>
           <h4 className='p-5 text-center font-light text-purple-900 text-xl'>Fund account and make expenditures on the go !</h4>
            <div className='grid grid-cols-2 gap-x-5 font-semibold'>
                <button className='p-2 bg-amber-300 rounded-full text-white'>support</button>
                <Link to={`/home`} className='p-2 bg-purple-600 rounded-full text-white'>Get started</Link>
            </div>        
        </div>
     );
}
 
export default WelcomePage;