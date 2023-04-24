import { useState, useEffect } from "react";
import { useDataContext } from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AccountForm = ({modalOff}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [pin, setPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log(name, pin)
        const response = await fetch(`http://localhost:5500/api/account`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, pin})
        })

        const json = await response.json()

        if(!response.ok){
            toast.error(json.error, {
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
            setName('')
            setType('')
            setPin('')
            setConfirmPin('')
            dispatch({type: 'CREATE_DATA', payload: json})
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
        }
    }

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed items-center justify-items-center justify-center bg-primary bg-opacity-10">
            <div className="flex flex-col  mt-10 md:w-4/12 w-full gap-y-4 shadow-lg rounded-lg bg-white md:p-5 p-2">
                <div className={`flex flex-row-reverse items-center justify-between`}>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 cursor-pointer text-red-500">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className='font-semibold'>create new account</h4>
                </div>
                <hr />
                <form className="grid grid-cols-1 gap-y-2 md:p-5 p-3 rounded-lg" onSubmit={handleSubmit}>
                    <label className='text-slate-500' htmlFor="">account name</label>
                    <input 
                        type="text"
                        className="text-xs border-slate-200 rounded-md"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}} 
                    />
                    <label >Account Type</label>
                    <select name="" id=""
                        className="text-xs border-slate-200 rounded-md"
                        value={type}
                        onChange={(e)=>{setType(e.target.value)}} 
                    >
                        <option value="">Account type</option>
                    </select>
                    <div className="grid grid-cols-2 gap-x-2 mt-2 justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="">pin</label>
                            <input type="number" 
                                className="text-xs border-slate-200 rounded-md"
                                value={pin}
                                onChange={(e)=>{setPin(e.target.value)}} 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">confirm pin</label>
                            <input type="number" 
                                className="text-xs border-slate-200 rounded-md"
                                value={confirmPin}
                                onChange={(e)=>{setConfirmPin(e.target.value)}} 
                            />
                        </div>

                    </div>

                    <div className="flex justify-center gap-x-4 mt-6">
                        <button onClick={modalOff} className="py-1 px-2 bg-white border rounded-lg ">close</button>
                        <button className="p-1 border bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md">confirm</button>

                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
     );
}
 
export default AccountForm;