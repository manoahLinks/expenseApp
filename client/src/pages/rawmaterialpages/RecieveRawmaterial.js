import React ,{useState, useEffect} from 'react' 
import AlertBox from '../../components/AlertBox';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import useFetch from '../../hooks/useFetch';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RecieveRawmaterial = ({modalOff}) => {

    const notify = () => toast('wow so easy');
    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [material, setMaterial] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [supplier, setSupplier] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const {data:rawmaterial} = useFetch(`https://smartwork-api.onrender.com/api/rawmaterial`)
    const {data:suppliers} = useFetch(`https://smartwork-api.onrender.com5500/api/supplier`)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial-transaction`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({material, quantity, amount, supplier})
        })

        const json = await response.json()

        if(!response.ok){
            setError(json)
            notify()
        }
        if(response.ok){
            setMaterial('') 
            setQuantity('')
            setAmount('')
            setSupplier('')
            setSuccess(true)
            dispatch({type: 'CREATE_DATA', payload: json})
        }

    }

    return ( 
        <div className="inset-0 mt-auto fixed justify-center bg-primary bg-opacity-10 justify-items-center grid grid-cols-1 text-xs">
            <div className='flex'>
                
            </div>
            <div className="flex flex-col gap-y-4 mx-2 md:mx-0">
                {error && <AlertBox message={error.message}/>}
                {success && <AlertBox message={`successfully confirmed`}/>}
                <div onClick={modalOff} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 text-red-500">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </div>
                
                <form className="grid grid-cols-1 gap-y-2 bg-white rounded-md shadow p-5" onSubmit={handleSubmit}>
                    <h4 className="text-center text-primary font-semibold text-shadow">Recieve supply</h4>
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
                    <div className="grid grid-cols-2 gap-y-2">
                        <label htmlFor="">Quantity</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                            value={quantity}
                            onChange={(e)=>{setQuantity(e.target.value)}}
                        />

                        <label htmlFor="">Amount</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                            value={amount}
                            onChange={(e)=>{setAmount(e.target.value)}}
                        />

                        <label htmlFor="">supplier</label>
                        <select
                            className="text-xs border-slate-300"
                            value={supplier}
                            onChange={(e)=>{setSupplier(e.target.value)}}
                        >
                            <option value="">select supplier</option>
                            {suppliers && suppliers.map((supplier)=>(
                               <option value={supplier.name}>{supplier.name}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-xol gap-x-2 mt-4">
                        <button onClick={modalOff} className={`p-2 rounded bg-error text-red-500 hover:bg-red-500 hover:text-error`}>close</button>
                        <button className="p-2 text-white font-semibold rounded bg-primary hover:bg-opacity-50">Confirm</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
     );
}
 
export default RecieveRawmaterial;