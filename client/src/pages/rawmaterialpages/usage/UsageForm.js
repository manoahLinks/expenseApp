import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UsageForm = ({modalOff}) => {
    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()
    const {data:rawmaterial} = useFetch(`https://smartwork-api.onrender.com/api/rawmaterial`)
    const [receiver, setReciever] = useState('')
    const [material, setMaterial] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial-transaction/usage`, {
            method: 'POST',
            headers:{
                'Authorization' : `Bearer ${user.token}`,
                'Content-Type' : `application/json`
            },
            body: JSON.stringify({material, quantity, amount, description, receiver})
        })

        const json = await response.json()

        if(!response.ok){
            toast.error(json, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if(response.ok){
            setMaterial('') 
            setQuantity('')
            setAmount('')
            receiver('')
            dispatch({type: 'CREATE_DATA', payload: json})
            toast.success(`assigned sucessfully`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed bg-primary bg-opacity-10 items-center justify-items-center">
            <div className="flex flex-col bg-white rounded-md shadow gap-y-4 p-2 md:p-5">
                <div className='flex flex-row-reverse justify-between'>
                    <svg onClick={modalOff}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 text-red-500 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className="text-center text-primary font-semibold text-shadow">Rawmaterial Usage</h4>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-2">
                    <label className="text-xs">Raw material</label>
                    <select
                        className="border-slate-300 text-xs"
                        value={material}
                        onChange={(e)=>{setMaterial(e.target.value)}}
                    >
                        <option value="">select rawmaterial</option>
                        {rawmaterial && rawmaterial.map((material)=>(
                            <option key={material._id} value={material.name}>{material.name}</option>
                        ))}
                    </select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                        <label htmlFor="">Quantity</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                            value={quantity}
                            onChange={(e)=>{setQuantity(e.target.value)}}
                        />

                        <label htmlFor="">Worth of Stock</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                            value={amount}
                            onChange={(e)=>{setAmount(e.target.value)}}
                        />

                        <label htmlFor="">Description</label>
                        <textarea 
                            type="description"
                            className="text-xs border-slate-300"
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />

                        <label htmlFor="">Recieved By</label>
                        <select
                            onChange={(e)=>{setReciever(e.target.value)}}
                            className="text-xs border-slate-300"
                        
                        >
                            <option value="">select store</option>
                            <option value="Abuja store">Abuja store</option>
                            <option value="Kaduna store">Kaduna store</option>
        
                        </select>
                    </div>
                    <div className="flex flex-xol gap-x-2 mt-4">
                        <button onClick={modalOff} className={`p-2 rounded bg-error text-red-500 hover:bg-red-500 hover:text-error`}>close</button>
                        <button className="p-2 text-white font-semibold rounded bg-primary hover:bg-opacity-50">Confirm</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default UsageForm;