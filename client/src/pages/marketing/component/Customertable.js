import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomerTable = ({customers, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`https://smartwork-api.onrender.com/api/customer/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
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
            dispatch({type: `DELETE_DATA`, payload: json})
            toast.success(`Deleted ${json._id} sucessfully`, {
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
        <div className="grid grid-cols-1 bg-white gap-y-4">
            <div className="flex justify-between items-center">
                
            </div>
            <table className="table table-auto w-full text-left">
                <thead>
                    <tr className="border-b grid grid-cols-4 items-center">
                        <th className="p-1">Name</th>
                        <th className="p-1">shop address</th>
                        <th className="p-1">phone</th>
                        <th className="p-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                {customers && customers.map((customer)=>(
                    <tr key={customer._id} className="grid grid-cols-4 p-2 items-center">
                        <td className="p-1 cursor-pointer flex gap-x-2 items-center">
                            <img className="w-10 h-10 bg-slate-200 rounded-full" src={require(`../../../assets/icons8-user-male-100.png`)} alt="" />
                            <div onClick={()=>{modalOn(customer)}}  className="flex flex-col">
                                <h4 className="font-semibold">{customer.name}</h4>
                                <small>{customer.email}</small>    
                            </div>
                        </td>
                        
                        <td className="p-1">{customer.address}</td>
                        <td className="p-1">0{customer.phone}</td>
                        <td className="p-1 items-center flex gap-x-1">
                            <div onClick={()=>{handleDelete(customer._id)}}  className="flex bg-slate-200 p-1 rounded-md cursor-pointer hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex bg-slate-200 p-1 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
            <ToastContainer/>
        </div>
        
     );
}
 
export default CustomerTable;