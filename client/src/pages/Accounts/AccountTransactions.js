import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const AccountTransactions = () => {

    const [activeTab, setActiveTab] = useState(0)
    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/transaction`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, user])

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed bg-primary bg-opacity-20 justify-center justify-items-center">
            <div className="flex flex-col ml-auto md:w-4/12 mt-10 gap-y-6 bg-white rounded-lg md:p-5 p-3">
                <div className="flex justify-between font-bold">
                    <h4>Accounts</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className="flex flex-col gap-y-2 ">
                    <div className="grid grid-cols-1 rounded-lg p-5 shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-4">
                        <div className="flex justify-between">
                            <h4 className="font-semibold text-white">Chase</h4>
                            <button className="py-1 px-4 rounded-md flex items-center bg-white">
                                <h4 className="text-xs">chase</h4>
                            </button>
                        </div>

                        <div className="flex justify-between text-white text-xs">
                            <div className="flex flex-col gap-y-2">
                                <h4 >Transaction</h4>
                                <h4 className="text-xl font-semibold">73</h4>
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <h4>Total Balance</h4>
                                <h4 className="text-xl font-semibold">$74,330</h4>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="py-1 px-2 text-white rounded-lg border">Fund</button>
                            <button className="py-1 px-2 text-white rounded-lg border">Transfer</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <button className="flex items-center justify-center gap-x-2 p-1 border rounded border-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h4>card details</h4>
                        </button>
                        <button className="flex items-center justify-center gap-x-2 p-1 border rounded border-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                            </svg>
                            <h4>copy to clipboard</h4>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1">

                </div>

                <div className="flex flex-col gap-y-4">
                    <div className="grid grid-cols-4 text-center cursor-pointer">
                        <h4 onClick={()=>{setActiveTab(0)}} className={`p-2 border-b-2  ${activeTab == 0 ? `border-blue-600` : `border-slate-100`}`}>View All</h4>
                        <h4 onClick={()=>{setActiveTab(1)}} className={`p-2 border-b-2  ${activeTab == 1 ? `border-blue-600` : `border-slate-100`}`}>Transactions</h4>
                        <h4 onClick={()=>{setActiveTab(2)}} className={`p-2 border-b-2  ${activeTab == 2 ? `border-blue-600` : `border-slate-100`}`}>Deposit</h4>
                        <h4 onClick={()=>{setActiveTab(3)}} className={`p-2 border-b-2  ${activeTab == 3 ? `border-blue-600` : `border-slate-100`}`}>Transfer</h4>
                    </div>
                    <div className="flex flex-col">
                        {data && data.map((transaction)=>(
                            <div className="flex p-2 justify-between items-center border-b">
                                <div className="flex gap-x-2 items-center">
                                    <div className="p-2 rounded-full bg-slate-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold">{transaction.type}</h4>
                                        <h4>Expiry 06/2024</h4>
                                    </div>
                                </div>
                                <h4>+{transaction.amount}</h4>
                            </div>
                        ))}      
                    </div>
                </div>   
            </div>
        </div>
        
     );
}
 
export default AccountTransactions;