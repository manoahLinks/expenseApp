import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";

const CustomerTable = ({customers, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5500/api/customer/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }) 

        const json = await response.json()

        if(response.ok){
            dispatch({type: `DELETE_DATA`, payload: json})
        }
    }

    return ( 
        <div className="grid grid-cols-1 bg-white">
            <div className="flex justify-between items-center">
                <div className="relative flex items-center">
                    <label className="absolute mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </label>
                    <input 
                        type="text"
                        className="border-none rounded text-xs" 
                        placeholder="search"
                    />
                </div>
                <div className="flex gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>

                </div>

            </div>
            <table className="table table-auto w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="p-1">Name</th>
                        <th className="p-1">shop address</th>
                        <th className="p-1">phone</th>
                        <th className="p-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                {customers && customers.map((customer)=>(
                    <tr key={customer._id} className="border-b ">
                        <td onClick={()=>{modalOn(customer)}}  className="p-1 flex flex-col">
                            <h4 className="font-semibold">{customer.name}</h4>
                            <small>{customer.email}</small>    
                        </td>
                        <td className="p-1">{customer.address}</td>
                        <td className="p-1">0{customer.phone}</td>
                        <td className="p-1 items-center flex justify-evenly">
                            <div onClick={()=>{handleDelete(customer._id)}}  className="flex cursor-pointer hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
        
     );
}
 
export default CustomerTable;