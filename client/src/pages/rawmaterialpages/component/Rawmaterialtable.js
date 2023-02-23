import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";

const RawmaterialTable = ({materials, modalOn}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5500/api/rawmaterial/${id}`, {
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
        <div className="grid grid-cols-1">
            <table className="table table-auto w-full text-center text-xs border-collapse">
                <thead>
                    <tr className="border-b bg-gray-100 ">
                        <th className="px-4 py-2">Raw material</th>
                        <th className="px-4 py-2">net weight <sub>grms</sub></th>
                        <th className="px-4 py-2">price</th>
                        <th className="px-4 py-2">price <sup>-grm</sup></th>
                        <th className="px-4 py-2">re-order</th>
                        <th className="px-4 py-2">status</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {materials && materials.map((material)=>(
                    <tr className="border-b hover:bg-opacity-20 hover:bg-primary" key={material._id}>
                        <td onClick={()=>{modalOn(material)}} className="px-4 py-2 text-white bg-opacity-50 bg-primary font-bold">{material.name}</td>
                        <td className="px-4 py-2">{material.netWeight}</td>
                        <td className="px-4 py-2">{material.netPrice}</td>
                        <td className="px-4 py-2 overflow-hidden">{material.netWeight/material.netPrice}</td>
                        <td className="px-4 py-2">{material.reOrderLevel}</td>
                        <td className="px-4 py-2">{material.qtyAvailable < material.reOrderLevel ? 'low': 'instock'}</td>
                        <td onClick={()=>{handleDelete(material._id)}} className="px-4 py-2">
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
        </div>
        
     );
}
 
export default RawmaterialTable;