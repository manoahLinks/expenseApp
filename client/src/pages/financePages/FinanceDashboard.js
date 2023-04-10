import { useState } from "react";
import AccountForm from "../Accounts/AccountForm";
import AccountTransactions from "../Accounts/AccountTransactions";
import SuppliersGrid from "../suppliers/components/SuppliersGrid" 
import SupplierForm from "../suppliers/SupplierForm";
import TransferForm from "../Accounts/components/TransferForm";

const FinanceDashboard = () => {

    const [accountForm, setAccountForm] = useState(false)
    const [supplierForm, setSupplierForm] = useState(false)
    const [transactionModal, setTransactionModal] = useState(false)
    const [transferForm, setTransferForm] = useState(false)

    const modalOff = () => {
        setAccountForm(false)
        setSupplierForm(false)
        setTransferForm(false)
    }

    const handleTransactionsModal = () => {
        setTransactionModal(true)
    }

    return ( 
        <div className="grid md:grid-cols-3 grid-cols-1 ">
            <div className="flex flex-col col-span-2 md:p-5 ">

                <div className="grid md:grid-cols-4 grid-cols-2 gap-y-2 gap-x-2 md:mx-0 mx-2">
                    <div className="flex flex-col gap-y-4 rounded-md p-3 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        <small>Total bank Deposits</small>
                        <h4 className="text-xl font-semibold">N120,000</h4>
                    </div>

                    <div className="flex flex-col gap-y-4 rounded-md bg-white p-3 shadow">
                        <small>Invoices</small>
                        <h4 className="text-xl">N109,000</h4>
                    </div>

                    <div className="flex flex-col gap-y-4 rounded-md bg-white p-3 shadow">
                        <small>Expenditures</small>
                        <h4 className="text-xl">N105,000</h4>
                    </div>

                    <div className="flex flex-col gap-y-4 rounded-md bg-white p-3 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 text-violet-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <small>supplier's payment</small>
                        <h4 className="text-xl">N110,000</h4>
                    </div>
                </div>

            </div>
            <div  className=" flex flex-col gap-y-4">
                <div className="flex flex-col bg-white rounded-lg p-2 md:p-5 gap-y-4">
                    <h4 className="font-bold text-slate-900">My Account</h4>

                    <div  className="grid grid-cols-1 rounded-lg p-5 shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-4">
                        <div className="flex justify-between">
                            <h4 className="font-semibold text-white">Chase</h4>
                            <button onClick={handleTransactionsModal} className="py-1 px-4 rounded-md flex items-center bg-white">
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
                            <button onClick={()=>{setTransferForm(true)}} className="py-1 px-2 text-white rounded-lg border">Transfer</button>
                        </div>

                    </div>

                    <button onClick={()=>{setAccountForm(true)}} className="border w-6/12 self-center text-xs border-slate-300 p-1 rounded gap-x-2">

                        <h4>Add new account</h4>
                    </button>
                </div>

                <div className="grid grid-cols-1">
                    <SuppliersGrid/>
                    <button onClick={()=>{setSupplierForm(true)}} className='border w-6/12 self-center text-xs border-slate-300 p-1 rounded gap-x-2'>
                        <h4>new supplier</h4>
                    </button>
                </div>
                {accountForm && <AccountForm modalOff={modalOff}/>}
                {transactionModal && <AccountTransactions/>}
                {supplierForm && <SupplierForm modalOff={modalOff}/>}
                {transferForm && <TransferForm modalOff={modalOff}/>}
            </div>

        </div>
     );
}
 
export default FinanceDashboard;