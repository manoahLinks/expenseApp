import { formatDistanceToNow } from 'date-fns'
import React from 'react';

const DepositGrid = ({deposits}) => {

    return ( 
        <div className="grid grid-cols-1">
            {deposits.map((deposit)=>(
            
                <div key={deposit._id}  className="flex justify-between p-2 bg-white border-b border-silver-100 items-center">
                    <div className="flex items-center">
                        <div className="p-2 rounded-full bg-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width={2.5} stroke="currentColor"  fill="currentColor" className="w-4 h-4 text-white">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                    
                        <div className="flex flex-col mx-2">
                            <h4 className="font-semibold">{deposit.depositor}</h4>
                            <h4 className="text-blue-700">{formatDistanceToNow(new Date(deposit.createdAt), {addSuffix: true})}</h4>
                        </div>
                    </div>
                    
                    <div className='flex'>
                        <h4 className="font-semibold text-sm">{deposit.amount}</h4>

                    </div>                    
                </div>   
            ))}    
        </div>
     );
}
 
export default DepositGrid;