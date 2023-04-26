import { useState } from "react";
import useFetch from "../../../useFetch";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductionRecordForm = ({modalOff}) => {

    const {user} = useAuthContext()
    const {dispatch} = useDataContext()
    const {result: products}  = useFetch(`http://localhost:5500/api/product`)
    const [product, setProduct] = useState('')
    const [bags, setBags] = useState('')
    const [panCount, setPanCount] = useState('')
    const [damage, setDamage] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5500/api/production-record`, {
            method: `POST`,
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({product, bags, panCount, damage, comment})
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

        if(response.ok) {
            setProduct('')
            setBags('')
            setPanCount('')
            setDamage('')
            setComment('')
            toast.success(`created sucessfully`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch({type:'CREATE_DATA', payload:json})
        }
    }

    return ( 
        <div className="grid grid-cols-1 items-center overflow-y-scroll justify-items-center inset-0 fixed bg-primary bg-opacity-20 rounded-md">
            <div className="flex flex-col md:gap-y-4 gap-y-2 md:p-5 p-2 bg-white md:w-4/12 w-full rounded-fu;;">
                <div className="flex justify-between items-center">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <hr />
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-2">
                    <select
                        className="text-xs" 
                        onChange={(e)=>{setProduct(e.target.value)}}
                    >
                        <option value="">select product</option>
                        {products && products.map((product)=>(
                            <option key={product._id} value={product._id}>{product.name}</option>
                        ))}
                    </select>
                    
                    <div className="grid grid-cols-2 md:gap-x-8 gap-y-4">
                        <input 
                            type="number"
                            className="text-xs"
                            placeholder="Bags prod."
                            value={bags}
                            onChange={(e)=>{setBags(e.target.value)}}
                        />
                        <h4>cost of prod.</h4>
                        <input 
                            type="number"
                            className="text-xs"
                            placeholder="pan count"
                            value={panCount}
                            onChange={(e)=>{setPanCount(e.target.value)}}
                        />
                        <h4>expected count</h4>
                        <input 
                            type="number" 
                            className="text-xs"
                            placeholder="damage"
                            value={damage}
                            onChange={(e)=>{setDamage(e.target.value)}}
                        />
                        <textarea 
                            className="col-span-2 text-xs" 
                            placeholder="comment"
                            value={comment}
                            onChange={(e)=>{setComment(e.target.value)}} 
                        ></textarea>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2">
                        <button onClick={modalOff} className="p-2 border-r">cancel</button>
                        <button className="p-2 hover:bg-orange-300 text-gray-700">proceed</button>
                    </div>
                </form>
                
            </div>
            <ToastContainer/>
        </div>
     );
}
 
export default ProductionRecordForm;