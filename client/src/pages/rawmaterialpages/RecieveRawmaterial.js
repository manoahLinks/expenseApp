import React ,{useState, useEffect} from 'react' 
import AlertBox from '../../components/AlertBox';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import useFetch from '../../hooks/useFetch';

const RecieveRawmaterial = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [material, setMaterial] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [supplier, setSupplier] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const {data:rawmaterial} = useFetch(`http://localhost:5500/api/rawmaterial`)
    const {data:suppliers} = useFetch(`http://localhost:5500/api/supplier`)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:5500/api/supplies`, {
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
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
                <img src={require(`../../assets/Logistics-amico.png`)} alt="recieve material" />
            </div>
            <div className="flex flex-col gap-y-4">
                {error && <AlertBox message={error.message}/>}
                {success && <AlertBox message={`successfully confirmed`}/>}
                <h4 className="text-center text-primary">Recieve supply</h4>
                <form className="grid grid-cols-1 gap-y-2" onSubmit={handleSubmit}>
                    <label className="text-xs">Raw material</label>
                    <select
                        className="border-slate-300 text-xs"
                        value={material}
                        onChange={(e)=>{setMaterial(e.target.value)}}
                    >
                        <option value="">select rawmaterial</option>
                        {rawmaterial && rawmaterial.map((material)=>(
                            <option key={material._id} value={material._id}>{material.name}</option>
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
                               <option value={supplier._id}>{supplier.name}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4 mt-8">
                        
                        <button className="p-2 col-span-2 text-white font-semibold rounded bg-primary hover:bg-opacity-50">Confirm</button>
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default RecieveRawmaterial;