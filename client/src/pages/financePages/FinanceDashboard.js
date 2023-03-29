import { useState } from "react";
import AccountForm from "../Accounts/AccountForm";
import AccountTransactions from "../Accounts/AccountTransactions";
import SuppliersGrid from "../suppliers/components/SuppliersGrid" 

const FinanceDashboard = () => {

    const [accountForm, setAccountForm] = useState(false)
    const [transactionModal, setTransactionModal] = useState(false)

    const modalOff = () => {
        setAccountForm(false)
    }

    const handleTransactionsModal = () => {
        setTransactionModal(true)
    }

    return ( 
        <div className="grid md:grid-cols-3 grid-cols-1 ">
            <div className="flex flex-col col-span-2 md:p-5 ">

                <div className="grid md:grid-cols-4 grid-cols-2 gap-y-2 gap-x-2 md:mx-0 mx-2">
                    <div className="flex flex-col gap-y-2 rounded-md bg-blue-400 text-white p-3 shadow">
                        <small>Total Earning</small>
                        <h4 className="text-xl font-semibold">$120,000</h4>
                        <div className="flex text-xs">
                            <small>12% increase from target</small>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-md bg-white p-3 shadow">
                        <small>Invoices</small>
                        <h4 className="text-xl">$109,000</h4>
                        <div className="flex text-xs">
                            <small>12% increase from target</small>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-md bg-white p-3 shadow">
                        <small>Expenditures</small>
                        <h4 className="text-xl">$105,000</h4>
                        <div className="flex text-xs">
                            <small>12% increase from target</small>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-md bg-white p-3 shadow">
                        <small>suppliers</small>
                        <h4 className="text-xl">$110,000</h4>
                        <div className="flex text-xs">
                            <small>12% increase from target</small>
                        </div>
                    </div>
                </div>

            </div>
            <div onClick={handleTransactionsModal} className=" flex flex-col gap-y-4">
                <div className="flex flex-col bg-white rounded-lg p-2 md:p-5 gap-y-4">
                    <h4 className="font-bold text-slate-900">My Account</h4>

                    <div className="grid grid-cols-1 rounded-lg p-5 shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-8">
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

                    </div>

                    <button onClick={()=>{setAccountForm(true)}} className="border w-6/12 self-center text-xs border-slate-300 p-1 rounded gap-x-2">

                        <h4>Add new account</h4>
                    </button>
                </div>

                <div className="grid bg-white shadow-md grid-cols-1">
                    <SuppliersGrid/>
                </div>
                {accountForm && <AccountForm modalOff={modalOff}/>}
                {transactionModal && <AccountTransactions/>}
            </div>

        </div>
     );
}
 
export default FinanceDashboard;