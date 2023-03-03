import { useDataContext } from "../../../hooks/useDataContext"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useState, useEffect } from "react"

const SuppliesTable = ({ supplies }) => {

    const {user} = useAuthContext()
    const {dispatch} = useDataContext()
    const [filterDate, setFilterDate] = useState('')

    const handleDelete = async (id) => {

        const response = await fetch(`http://localhost:5500/api/supplies/${id}`, {
            headers:{
                method: 'DELETE',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
    
        response.ok ? dispatch({type:'DELETE_DATA', payload: json}) : console.log('not deleted')
    }

    const searchByDate = supplies.filter(supply => {

        !filterDate ? true : supply.createdAt === filterDate
    })

    return ( 
        <div className="grid grid-cols-1">
            <table className="flex flex-col table-auto">
                <input 
                    type="date" 
                    className="w-2/12"
                    value={filterDate}
                    onChange={(e)=>{setFilterDate(e.target.value)}} 
                />

                <tr className="grid grid-cols-7 text-center">
                    <th>Date</th>
                    <th className="col-span-2">raw material</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>supplied by</th>
                    <th>Action</th>
                </tr>
               
                {searchByDate && searchByDate.map((supply)=>(
                    <tr key={supply._id} className="grid grid-cols-7 text-center">
                        <td>{supply.createdAt}</td>
                        <td className="col-span-2">{supply.material}</td>
                        <td>{supply.quantity}</td>
                        <td>{supply.amount}</td>
                        <td>{supply.supplier}</td>
                        <td onClick={()=>{handleDelete(supply._id)}} className="px-4 py-2">
                            <div className="p-1 hover:bg-error bg-slate-200 flex justify-center rounded cursor-pointer hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
     );
}
 
export default SuppliesTable;