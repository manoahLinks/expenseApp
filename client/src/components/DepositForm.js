import React, {useState} from "react";

const DepositForm = ({id}) => {

    const [amount, setAmount] = useState('')
    const [next, setNext] = useState(false)
    const [pin, setPin] = useState('')
    const [error, setError] = useState(false)

    const handleNext = () =>{
        setNext(true)
        console.log(id)
    }

    const handleSubmit = async () =>{

        let newDeposit = {amount, pin} 
        

        let response = await fetch(`http://localhost:5500/api/account/${id}`, {

            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(newDeposit)
        })

        const json = await response.json()

        if(!response.ok){
            setError(true)
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
        <div className="flex flex-col m-2 p-2 bg-white rounded-md">
            <h4 className="font-semibold text-purple-800">Fund an account</h4>

            <form className="grid grid-cols-1 p-2 gap-y-2" onSubmit={handleSubmit}>
                <input 
                 type="number"
                 className={`text-xs block ${next && 'hidden'} border border-gray-50 border-b-purple-900 text-center text-purple-800`}
                 placeholder="amount"
                 onChange={(e)=>{setAmount(e.target.value)}}
                 value={amount} 
                />

                {next && <h4>Deposit {amount} to </h4>}

                <input 
                 type="number"
                 placeholder="pin"
                 className={`text-xs ${!next &&  'hidden'} ${next && 'block'}`} 
                 onChange={(e)=>{setPin(e.target.value)}}
                 value={pin} 
                />
                

                <div className="flex justify-evenly gap-x-3 mt-3">
                    <button className={`self-center p-2 border border-amber-900 rounded-md text-amber-900 w-6/12 ${!next &&  'hidden'} ${next && 'block'}`}>cancel</button>
                    <button className={`self-center p-2 border border-purple-900 rounded-md text-purple-900 w-6/12 ${!next &&  'hidden'} ${next && 'block'}`}>confirm</button>
                </div>
                
            </form>
            <button onClick={handleNext} className={` self-center p-2 border border-purple-900 rounded-md text-purple-900 w-6/12 ${next && `hidden`}`}>Next</button>
        </div>
     );
}
 
export default DepositForm;