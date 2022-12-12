import React, {useState} from "react";
import DepositGrid from "./DepositGrid";
import useFetch from "../useFetch";
import TableGrid from "./TableGrid";
import LoadingPage from "./Loading";
import AlertBox from "./AlertBox";


const Transactions = () => {  

    const [deposits, setDeposits] = useState(true)
    const [expenses, setExpenses] = useState(true) 
    const {result, isPending, error} = useFetch(`http://localhost:5500/api/deposit`)
    const {result:expense} = useFetch(`http://localhost:5500/api/expense`)

    const handleDeposits = () =>{
        setExpenses(false)
        setDeposits(true)
    }

    const handleExpenses = () =>{
        setExpenses(true)
        setDeposits(false)
    }
 
    return ( 
        <div className="grid grid-cols-1 bg-gray-100 text-gray-700">
            <div className="flex items-center p-2 justify-between">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-900">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    <h4 className="mx-2 text-sm">Transactions</h4>
                </div>
                <h4 className="self-end text-purple-800">history</h4>
            </div>

            <div className="flex justify-evenly p-2">
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg">All</h4>
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg" onClick={handleDeposits}>Re-imbursements</h4>
                <h4 className="px-2 p-0.5 bg-purple-200 rounded-lg" onClick={handleExpenses}>Expenses</h4>
            </div>

            <div className="flex justify-between p-2">
                <select name="" id="" className="text-xs border-none bg-purple-100 text-purple-900 rounded-full">
                    <option value="">Jan</option>
                    <option value="">feb</option>
                    <option value="">mar</option>
                    <option value="">apr</option>
                </select>
                <div className="flex">
                   
                </div>
            </div>

            <div className="grid grid-cols-1">
                {deposits && result && <DepositGrid deposits={result}></DepositGrid>}
                {expenses && expense && <TableGrid expenses={expense}></TableGrid>}
                {isPending && <LoadingPage></LoadingPage>}
                {error && <AlertBox message={`failed to find resource check your internet connection`}></AlertBox>}
            </div>
            

        </div>
     );
}
 
export default Transactions;