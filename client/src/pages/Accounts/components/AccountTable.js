import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AccountTable = ({accounts, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5500/api/account/${id}`, {
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
            <table className="table-auto text-xs text-center">
                <thead>
                    <tr className="grid grid-cols-6 border-b">
                        <th className="px-4 py-2">Account Name</th>
                        <th className="px-4 py-2">Pin</th>
                        <th className="px-4 py-2">Total deposits</th>
                        <th className="px-4 py-2">Total withdrawals</th>
                        <th className="px-4 py-2">Balance</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts && accounts.map((account) => (
                        <tr key={account._id}  className="grid grid-cols-6 hover:bg-primary hover:bg-opacity-20">
                            <td onClick={()=>{modalOn(account)}} className="px-4 py-2">{account.name}</td>
                            <td className="px-4 py-2">{account.pin}</td>
                            <td className="px-4 py-2">{}</td>
                            <td className="px-4 py-2">{}</td>
                            <td className="px-4 py-2">{account.balance}</td>
                            <td onClick={()=>{handleDelete(account._id)}} className="px-4 py-2">
                                <div className="p-1 hover:bg-error bg-slate-200 flex justify-center rounded cursor-pointer hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
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
 
export default AccountTable;