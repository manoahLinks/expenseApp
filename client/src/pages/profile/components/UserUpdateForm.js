import { useState, useEffect } from "react";
import { useDataContext } from "../../../hooks/useDataContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useFetch from "../../../hooks/useFetch";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const UserUpdateForm = ({user, modalOff}) => {

    const {dispatch} = useDataContext()
    const {user: loggedUser} = useAuthContext()
    

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [homeAddress, setHomeAddress] = useState(user.homeAddress)


    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch(`https://smartwork-api.onrender.com/api/user/:${user._id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phone, homeAddress})
        })

        let json = await response.json()

        if(!response.ok){
            console.log('error updating')
            toast.error(json , {
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
            console.log('sucess')
            dispatch({type: 'CREATE_DATA', payload: json})
            toast.success(`successfully created ${json._id}` , {
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
        <div className="grid grid-cols-1 md:grid-cols-1 overflow-y-scroll bg-opacity-20 bg-primary items-center justify-items-center fixed inset-0 ">
            <div className="flex flex-col gap-y-4 p-5 my-16 md:w-3/12 w-full shadow-lg rounded-lg bg-white">
                
                <div className="flex justify-between">
                    <h4 className="font-semibold">Update account</h4>
                    <svg onClick={()=>{modalOff()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr />

                <div className="flex flex-col items-center gap-y-1 md:gap-y-2">
                    <img className="rounded-full bg-orange-300" src={require(`../../../assets/icons8-user-male-100.png`)} alt="proimg" />
                    <h4>{user.email}</h4>
                    <small>{user.role}</small>
                    <h4>Employee Id: {user._id}</h4>
                </div>
                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">
                    <div className="flex items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute ml-2">
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                        </svg>
                        <input 
                            type="text"
                            className="text-xs w-full p-2 focus:outline-none border-slate-300 text-center"
                            placeholder="enter name"
                            value={name} 
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>

                    <div className="flex items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute ml-2 fill-orange-300">
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                        <input 
                            type="text"
                            className="text-xs w-full p-2 focus:outline-none border-slate-300 text-center"
                            value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="enter email"
                        />
                    </div>

                    <div className="flex items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-slate-400 absolute ml-2">
                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                        <input 
                            type="number"
                            className="text-xs w-full p-2 focus:outline-none placeholder-slate-300 border-slate-300 text-center"
                            value={phone} 
                            onChange={(e)=>{setPhone(e.target.value)}}
                            placeholder="e.g  080-123-456-789"
                        />
                    </div>

                    <div className="flex items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute ml-2">
                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                        </svg>
                        <input
                            type="text" 
                            className="text-xs w-full p-2 focus:outline-none placeholder-slate-300 border-slate-300 text-center"
                            value={homeAddress} 
                            onChange={(e)=>{setHomeAddress(e.target.value)}}
                            placeholder="home address"
                        />
                    </div>

                </div>
                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">
                    <div className="flex justify-between">
                        <h4>Start Date:</h4>
                        <h4>{user.updatedAt}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Device Address</h4>
                        <h4>{user.ipAddress}</h4>
                    </div>
                </div>

                <button onClick={()=>{handleSubmit()}} className="bg-blue-400 text-white p-2 cursor-pointer rounded-md font-semibold">Save changes</button>
            </div>
            <ToastContainer/>
        </div>
     );
}
 
export default UserUpdateForm;