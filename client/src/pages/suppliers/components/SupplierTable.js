import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SupplierTable = ({suppliers, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5500/api/supplier/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }) 

        const json = await response.json()

        if(response.ok){
            dispatch({type: `DELETE_DATA`, payload: json})
            toast.info(`successfully deleted ${json._id}` , {
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
        <div className="grid grid-cols-1">
            <table className="table-fixed w-full text-xs text-center border">
                <thead className="border-b bg-gray-100">
                    <tr className="grid grid-cols-8">
                        <th className="px-4 py-2">
                            <input  type="checkbox" />
                        </th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Total supplies</th>
                        <th className="px-4 py-2">Total payments</th>
                        <th className="px-4 py-2">outstanding</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {suppliers && suppliers.map((supplier)=>(
                        <tr key={supplier._id} className="border-b grid grid-cols-8">
                            <td className="px-4 py-2">
                                <input type="checkbox" />
                            </td>
                            <td onClick={()=>{modalOn(supplier)}}  className="px-4 py-2 font-semibold">{supplier.name}</td>
                            <td className="px-4 py-2">{supplier.email}</td>
                            <td className="px-4 py-2">{supplier.phone}</td>
                            <td className="px-4 py-2">{supplier.totalSupplies}</td>
                            <td className="px-4 py-2">{supplier.totalPayments}</td>
                            <td className="px-4 py-2">{supplier.totalSupplies - supplier.totalPayments}</td>
                            <td className="px-4 py-2 flex items-center justify-evenly">
                                <div onClick={()=>{handleDelete(supplier._id)}}  className="hover:bg-error flex justify-center cursor-pointer hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-300">
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
 
export default SupplierTable;