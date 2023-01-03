import React, {useState} from "react";
import LoadingPage from "./Loading";

const DepositForm = ({id}) => {

    const [amount, setAmount] = useState('')
    const [next, setNext] = useState(false)
    const [pin, setPin] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const handleNext = () =>{
        setNext(true)
        console.log(id)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleSubmit = async () =>{

        let newDeposit = {amount, pin} 
        
        setIsPending(true)

        let response = await fetch(`http://localhost:5500/api/account/${id}`, {

            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(newDeposit)
        })

        const json = await response.json()

        if(!response.ok){
            setError(err.message)
            console.log('error depositing')       
        }
        if(response.ok){
            setAmount('')
            setPin('')
            setError(false)
            console.log('successfully deposited')
        }
        
    }

    return ( 
        <div className={`grid grid-col-1 h-screen bg-purple-200 bg-opacity-50 inset-0 fixed  items-center`}>
            <div className="flex flex-col m-2 p-5 bg-white rounded-md">
                <h4 className="font-semibold text-purple-800 mb-5 text-sm py-2 border-b">Fund an account:</h4>

                <div className="p-2 rounded-full self-center bg-gray-100 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-spin self-center fill-blue-200">
                        <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                    </svg>
                </div>   

                <form className="grid grid-cols-1 p-2 gap-y-2" onSubmit={handleSubmit}>
                    <input 
                    type="number"
                    className={`block ${next && 'hidden'} rounded-md border text-sm border-purple-500 text-center text-purple-800`}
                    placeholder="amount"
                    onChange={(e)=>{setAmount(e.target.value)}}
                    value={amount} 
                    />

                    {next && <h4 className="text-sm font-light">Enter & confirm pin to Deposit <strong>N {amount}</strong>  to your account.</h4>}

                    <input 
                    type="number"
                    placeholder="pin"
                    className={`${!next &&  'hidden'} ${next && 'block'} my-5 text-center text-sm rounded-md border border-purple-900`} 
                    onChange={(e)=>{setPin(e.target.value)}}
                    value={pin} 
                    />
                    

                    <div className="grid grid-cols-2 gap-x-3 mt-3">
                        <button onClick={handleCloseModal} className={`self-center p-2 bg-red-300 text-white rounded-full ${!next &&  'hidden'} ${next && 'block'}`}>cancel</button>
                        <button className={`self-center p-2 border border-purple-900 rounded-full text-purple-900 ${!next &&  'hidden'} ${next && 'block'}`}>confirm</button>
                    </div>
                    
                </form>
                <button onClick={handleNext} className={` self-center p-2 bg-purple-900 rounded-full text-white w-6/12 ${next && `hidden`}`}>Next</button>
            </div>
            {isPending && <LoadingPage />}
        </div>
        
     );
}
 
export default DepositForm;