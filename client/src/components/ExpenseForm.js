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
        <div className="inset-0 grid grid-cols-1 items-center bg-purple-200 fixed bg-opacity-50 ">
            <div className="flex flex-col items-center bg-white m-2 p-5 rounded-md">
              
                <h4 className="text-sm border-b w-full py-4 font-semibold text-purple-800">Create new Expense :</h4>
            
                <form className="flex flex-col mt-3 bg-white rounded-md" onSubmit={handleSubmit}>
                    <select value={accountName} onChange={(e)=>{setAccountName(e.target.value)}} name="" id="type" className="my-2 rounded-md border-none bg-purple-50 shadow-md text-gray-400">
                        <option value={``}>Billing Account</option>
                        <option value={`Bulk_purchase`}>Bulk_purchase</option>
                    </select>
                    
                    <select value={type} onChange={(e)=>{setType(e.target.value)}} name="" id="type" className="my-2 text-sm rounded-md border-none bg-purple-50 shadow-md text-gray-400">
                        <option value={``}>select category</option>
                        <option value={`electricity`}>Electricity</option>
                        <option value={`maintenance`}>maintenance</option>
                        <option value={`production`}>production</option>
                    </select>
                    <textarea 
                    id="description" 
                    placeholder="Expense description" 
                    className="my-2 border-none bg-purple-50 text-sm shadow-md rounded-md"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}} 
                    />

                    <input 
                    type="number" 
                    id="amount" 
                    placeholder="Amount" 
                    className="my-2 border-none bg-purple-50 shadow-md rounded-md"
                    value={amount}
                    onChange={(e)=>{setAmount(e.target.value)}} 
                    />

                    <button className="p-2 mt-5 bg-purple-800 text-white font-semibold rounded-lg" >Next</button>
                </form>
                {isPending && <LoadingPage></LoadingPage>}
            </div>
        </div>
        
     );
}
 
export default ExpenseForm;