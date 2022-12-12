import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
const ExpenseDetails = ({result, cancelClick}) => {

    const handleDisburse = async (id) =>{

        let response = await fetch(`http://localhost:5500/api/expense/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let json = await response.json()

        if(!response.ok){
            console.log('unable to disburse')
        }
        if(response.ok){
            console.log('disbursed successfully', id)
        }
    }

    return ( 
        <div className="grid grid-cols-1 p-5">
            <div className="text-gray-500 grid grid-cols-2 gap-y-2">
                <h4 className="font-semibold">Expense Type:</h4>
                <h4 >{result.type}</h4>
                <h4 className="font-semibold">Description:</h4>
                <h4 >{result.description}</h4>
                <h4 className="font-semibold">Amount:</h4>
                <h4 >N {result.amount}</h4>
                <h4 className="font-semibold">Approval status:</h4>
                {!result.isApproved && <h4 className="">Awaiting approval</h4>}
                {result.isApproved && <h4 className="">Approved 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 inline-block">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                </h4>}
                <h4 className="font-semibold">Account status</h4>
                {!result.isDisbursed && <h4 className="">Pending</h4>}
                {result.isDisbursed && <h4 className="text-gray-500">Disbursed 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block text-blue-800">
                        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                    </svg>
                </h4>}
                <h4 className="font-semibold">Time created:</h4>
                <h4 className="font-semibold text-blue-600">{formatDistanceToNow(new Date(result.createdAt), {addSuffix:true}) }</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-2 justify-evenly mt-5">
                <button onClick={cancelClick} className="p-1 w-9/12 border border-silver-100 text-zinc-500 rounded-full">Cancel</button>
                <button onClick={()=>{handleDisburse(result._id)}} className={`${result.isDisbursed && 'hidden'} p-1 w-9/12 border border-purple-900 text-purple-900 rounded-full`}>Disburse</button>
            </div>
        </div>    
    
     );
}
 
export default ExpenseDetails;