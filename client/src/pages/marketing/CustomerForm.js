import { useState } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import AlertBox from "../../components/AlertBox";

const CustomerForm = () => {

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

        if(!user){
            setError(`You must be logged in`)
            console.log('no user')
            return
        }

        setIsPending(true)

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
            console.log(json.error)
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
        <div className="grid grid-cols-1 gap-y-2 justify-items-center">
            {success && <AlertBox message={`successful`} />}
            <h4 className="text-primary m-2 text-center font-semibold text-md p-2">Register new customer</h4>

            <div className="grid grid-cols-1 shadow md:w-9/12 w-full">
                <form className="flex flex-col gap-y-2 px-2 md:p-5 py-4" onSubmit={handleSubmit}>
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

                    <button className="p-1 self-end w-9/12 bg-primary font-semibold shadow rounded mt-8 text-sm text-white">Submit</button>
                </form>

            </div>
            
        </div>
     );
}
 
export default CustomerForm;