import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";

const UsageForm = ({modalOff}) => {
    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()
    const {data:rawmaterial} = useFetch(`http://localhost:5500/api/rawmaterial`)
    const [error, setError] = useState(false)
    const [material, setMaterial] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial-transaction/usage`, {
            method: 'POST',
            headers:{
                'Authorization' : `Bearer ${user.token}`
            },
            body: JSON.stringify({material, quantity, amount, description})
        })

        const json = await response.json()

        response.ok ? dispatch({type: 'CREATE_DATA', payload: json}) : setError(true)

    }

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed bg-primary bg-opacity-10 justify-items-center text-xs">
            <div>

            </div>
            <div className="">
                <div onClick={modalOff} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 text-red-500">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-2 bg-white rounded-md shadow p-5">
                    <h4 className="text-center text-primary font-semibold text-shadow">Rawmaterial Usage</h4>
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
                            className="text-xs border-slate-300"
                        
                        >
                            <option value="">select </option>
        
                        </select>
                    </div>
                    <div className="flex flex-xol gap-x-2 mt-4">
                        <button onClick={modalOff} className={`p-2 rounded bg-error text-red-500 hover:bg-red-500 hover:text-error`}>close</button>
                        <button className="p-2 text-white font-semibold rounded bg-primary hover:bg-opacity-50">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default UsageForm;