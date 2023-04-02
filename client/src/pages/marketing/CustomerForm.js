import React, { useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import AlertBox from "../../components/AlertBox";


const CustomerForm = ({modalOff}) => {

    const {dispatch} = useDataContext()
    const {user} = useAuthContext()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [success, setSuccess] =useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsPending(true)

        if(!user){
            setError(`You must be logged in`)
            console.log('no user')
            return
        }

        const response = await fetch(`http://localhost:5500/api/customer`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone, email, address}) 
        })

        const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            setError(json.error)
        }
        if(response.ok){
            setName('')
            setPhone('')
            setEmail('')
            setAddress('')
            setIsPending(false)
            console.log(json)
            dispatch({type: 'CREATE_DATA', payload: json})
            setSuccess(true)
        }
    }

    return ( 
        <div className="inset-0 fixed flex bg-primary bg-opacity-10 grid grid-cols-1 justify-items-center">
            <div className="md:p-5 flex flex-col gap-y-4 ml-auto mt-10 p-2 shadow md:w-4/12 rounded-md shadow w-full bg-white">
                <div className='flex flex-row-reverse justify-between items-center'>
                    <svg onClick={modalOff} className='w-5 h-5 text-red-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5}>
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className="text-primary text-center font-semibold text-md ">Register new customer</h4>
                </div>

                {success && <AlertBox message={`successful`} />}
                {error && <AlertBox message={error} />}

                <form className="flex flex-col gap-y-2 " onSubmit={handleSubmit}>
                    <label htmlFor="">Name:</label>
                    <input 
                        type="text"
                        placeholder="enter customer name"
                        className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none mb-2 font-light rounded"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                    />
                    <label htmlFor="">Phone:</label>
                    <input 
                        type="number"
                        placeholder="enter phone number"
                        className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none mb-2 font-light rounded"
                        onChange={(e)=>{setPhone(e.target.value)}}
                        value={phone} 
                    />

                    <label htmlFor="">Email address:</label>
                    <input 
                        type="email"
                        placeholder="enter email address"
                        className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none mb-2 font-light rounded"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email} 
                    />

                    <label htmlFor="">Shop Address:</label>
                    <textarea
                        placeholder="enter shop address"
                        className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none mb-2 font-light rounded"
                        onChange={(e)=>{setAddress(e.target.value)}}
                        value={address} 
                    />

                    <button className="p-1 flex items-center justify-center self-end w-9/12 bg-primary font-semibold shadow rounded text-sm text-white">
                        {isPending && <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin mx-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>}
                        <h4>Submit</h4> 
                    </button>
                </form>

            </div>
            
        </div>
     );
}
 
export default CustomerForm;