import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";

const RawmaterialTable = ({materials, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`https://smartwork-api.onrender.com/api/rawmaterial/${id}`, {
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
        <div className="grid grid-cols-1 gap-y-4">
            <div className="relative flex items-center justify-end">
                <input 
                    type="text"
                    className="text-xs w-full rounded-md border border-slate-300"
                    placeholder="search"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute mr-2">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
            </div>
            <table className="table table-auto w-full bg-white shadow rounded text-center text-xs">
                <thead className="text-primary">
                    <tr className="">
                        <th className="p-2">Raw material</th>
                        <th className="p-2">Re-order</th>
                        <th className="p-2">Qty Avail.</th>
                        <th className="p-2">status</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {materials && materials.map((material)=>(
                    <tr className="" key={material._id}>
                        <td onClick={()=>{modalOn(material)}} className="p-2 hover:font-bold cursor-pointer text-primary">{material.name}</td>
                        <td className="p-2">{material.qtyAvailable}</td>
                        <td className="p-2">{material.reOrderLevel}</td>
                        <td className="p-2">{material.qtyAvailable < material.reOrderLevel ? 'low': 'instock'}</td>
                        <td onClick={()=>{handleDelete(material._id)}} className="p-2">
                            <div className="flex justify-center cursor-pointer hover:text-error">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
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
 
export default RawmaterialTable;