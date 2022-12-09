import React, {useState, useEffect} from "react"
import LoadingPage from "./Loading"

const ExpenseForm = () => {

    const [type, setType] = useState(''),
          [description, setDescription] = useState(''),
          [amount, setAmount] = useState(''),
          [accountName, setAccountName] = useState(''),
          [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setIsPending(true)
        const newExpense = {accountName,type, description, amount}
        
        const response = await fetch(`https://expesetracker.herokuapp.com/api/expense`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        
            body: JSON.stringify(newExpense)
        })

        const json = await response.json()

        if(!response.ok){
            console.log('Expense not created')
        }

        if(response.ok){
            setType('')
            setDescription('')
            setAmount('')
            setAccountName('')
            setIsPending(false)
            console.log('Expense successfully created')
        }

    }

    return ( 
        <div className="grid grid-cols-1 bg-gray-100 items-center">
            <div className="flex items-center p-2 justify-between">
                <div className="flex">
                    <h4 className="mx-2 text-sm font-semibold text-purple-900">New Expense</h4>
                </div>
                <h4 className="self-end text-purple-800">history</h4>
            </div>
            <form className="flex flex-col m-3 p-3 bg-white rounded-md" onSubmit={handleSubmit}>
                <select value={accountName} onChange={(e)=>{setAccountName(e.target.value)}} name="" id="type" className="my-2 rounded-full text-xs border-none bg-purple-50 shadow-md text-gray-400">
                    <option value={``}>Billing Account</option>
                    <option value={`Bulk_purchase`}>Bulk_purchase</option>
                </select>
                
                <select value={type} onChange={(e)=>{setType(e.target.value)}} name="" id="type" className="my-2 rounded-full text-xs border-none bg-purple-50 shadow-md text-gray-400">
                    <option value={``}>select category</option>
                    <option value={`electricity`}>Electricity</option>
                    <option value={`maintenance`}>maintenance</option>
                    <option value={`production`}>production</option>
                </select>
                <textarea 
                 id="description" 
                 placeholder="Expense description" 
                 className="my-2 border-none bg-purple-50 shadow-md rounded-full text-xs"
                 value={description}
                 onChange={(e)=>{setDescription(e.target.value)}} 
                />

                <input 
                 type="number" 
                 id="amount" 
                 placeholder="Amount" 
                 className="my-2 border-none bg-purple-50 shadow-md text-xs focus:border-none rounded-full"
                 value={amount}
                 onChange={(e)=>{setAmount(e.target.value)}} 
                />

                <button className="px-2 py-3 mt-5 bg-purple-800 text-white font-semibold rounded-lg" >Next</button>
            </form>
            {isPending && <LoadingPage></LoadingPage>}
        </div>
     );
}
 
export default ExpenseForm;