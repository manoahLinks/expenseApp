import useFetch from '../../useFetch'
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AssignRole = ({modalOff}) => {

    const [userId, setUserId] = useState('')
    const [role, setRole] = useState('')

    const {result} = useFetch(`https://smartwork-api.onrender.com/api/user`)

    const handleSubmit = async () => {
        console.log(userId, role)

        const response = await fetch(`https://smartwork-api.onrender.com/api/user/assign-role`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, role})
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
            setRole(null)
            setUserId(null)
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
        <div className="flex flex-col inset-0 fixed items-center justify-center bg-opacity-20 bg-primary justify-items-center">
            <div className="flex flex-col md:p-5 gap-y-4 p-2 md:w-4/12 w-full bg-white rounded-lg">
                <div className="flex justify-between">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">select user</label>
                    <select onChange={(e)=>{setUserId(e.target.value)}} className='text-xs'>
                        <option value="">select user</option>
                        {result && result.map((user)=>(
                            <option key={user._id} value={user._id}>{user.email} <span className={`bg-green-100`}>({user.role})</span></option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label >role</label>
                    <select onChange={(e)=>{setRole(e.target.value)}} className='text-xs'>
                        <option value="">select role</option>
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                        <option value="storekeeper">storekeeper</option>
                    </select>
                </div>
                <div className='grid grid-cols-2'>
                    <button onClick={handleSubmit} className='p-1 hover:bg-opacity-60 border rounded-md text-white bg-gray-900'>submit</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
     );
}
 
export default AssignRole;