import {useState} from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const SupplierForm = ({modalOff}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {

        e.preventDefault()

        const response = await fetch(`http://localhost:5500/api/supplier`, {
            method: `POST`,
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phone, location})
        }) 

        const json = await response.json()

        if(!response.ok){
            setError(json)
            console.log(name, email, location, phone)
        }
        if(response.ok){
            setName('')
            setPhone('')
            setEmail('')
            setLocation('')
            console.log('created')
            dispatch({type: 'CREATE_DATA', payload: json})
        }

    }

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed justify-items-center justify-center bg-primary bg-opacity-10">
            <div className="flex flex-col ml-auto mt-10 md:w-4/12 w-full gap-y-4 rounded-lg bg-white md:p-5 p-2">
                <div className={`flex flex-row-reverse items-center justify-between`}>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 cursor-pointer text-red-500">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className='font-semibold'>Register new supplier</h4>
                </div>
                <div className='bg-slate-200 p-3 rounded'>
                    <h4>fill in correct details to create a new supplier</h4>
                    {error && <h4>{error}</h4>}
                </div>
                <form onSubmit={handleSubmit} className='grid gird-cols-1 md:p-5 p-3'>
                    <label htmlFor="">name</label>
                    <input 
                        type="text"
                        className='w-full border-slate-200'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="">email</label>
                    <input 
                        type="email"
                        className='w-full border-slate-200' 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label htmlFor="">Phone</label>
                    <input 
                        type="number"
                        className='w-full border-slate-200'
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}} 
                    />
                    <label htmlFor="">Location</label>
                    <input 
                        type="text"
                        className='w-full border-slate-200'
                        value={location}
                        onChange={(e)=>{setLocation(e.target.value)}} 
                    />

                    <div className='grid grid-cols-3 mt-6 gap-x-4'>
                        <button onClick={modalOff} className='border border-cyan-500 p-1 bg-white text-cyan-500 rounded-md'>cancel</button>
                        <button className='col-span-2 rounded-md text-white bg-gradient-to-r from-cyan-400 to-blue-300'>Proceed</button>
                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default SupplierForm;