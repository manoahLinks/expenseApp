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
        <div className="grid grid-cols-1 gap-y-2">
            {success && <AlertBox message={`successful`} />}
            <h4 className="text-green-500 m-2 font-semibold text-sm p-2">Register new customer</h4>

            <div className="grid grid-cols-2 border">
                <div className="flex hidden md:block">
                    <h4>Register new customer</h4>
                </div>
                <form className="flex flex-col gap-y-2 px-2 py-4 bg-gray-100" onSubmit={handleSubmit}>
                    <label htmlFor="">Name:</label>
                    <input 
                        type="text"
                        placeholder="enter customer name"
                        className="text-xs mb-2 border-none font-light rounded-md shadow-md"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                    />
                    <label htmlFor="">Phone:</label>
                    <input 
                        type="number"
                        placeholder="enter phone number"
                        className="text-xs mb-2 border-none font-light rounded-md shadow-md"
                        onChange={(e)=>{setPhone(e.target.value)}}
                        value={phone} 
                    />

                    <label htmlFor="">Email address:</label>
                    <input 
                        type="email"
                        placeholder="enter email address"
                        className="text-xs mb-2 border-none font-light rounded-md shadow-md"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email} 
                    />

                    <label htmlFor="">Shop Address:</label>
                    <textarea
                        placeholder="enter shop address"
                        className="text-xs mb-2 border-none font-light rounded-md shadow-md"
                        onChange={(e)=>{setAddress(e.target.value)}}
                        value={address} 
                    />

                    <button className="p-2 bg-green-500 rounded-lg text-white">Submit</button>
                </form>

            </div>
            
        </div>
     );
}
 
export default CustomerForm;