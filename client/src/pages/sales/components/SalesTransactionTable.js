import {format} from "date-fns"

const SalesTransactionTable = ({transactions}) => {
    return ( 
        <div className="grid grid-cols-1 hidden md:block">
            <table className="bg-white table-fixed w-full text-xs text-center border">
                <thead className="border-b bg-gray-100">
                    <tr className="grid grid-cols-7">
                        <th className="px-4 py-2">
                            <input  type="checkbox" />
                        </th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2 text-blue-500">Invoice No</th>
                        <th className="px-4 py-2">Total Amount</th>
                        <th className="px-4 py-2">Discount</th>
                        <th className="px-4 py-2">createdBy</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {transactions && transactions.map((transaction)=>(
                        <tr key={transaction._id} className="border-b grid grid-cols-7">
                            <td className="px-4 py-2">
                                <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2 font-semibold">{transaction.createdAt}</td>
                            <td className="px-4 py-2 text-blue-500 truncate">{transaction.invoiceNo}</td>
                            <td className="px-4 py-2">{transaction.amount}</td>
                            <td className="px-4 py-2">{transaction.discount}</td>
                            <td className="px-4 py-2">{transaction.createdBy}</td>
                            <td className="px-4 py-2 flex items-center justify-evenly">
                                <div className="hover:bg-error flex justify-center cursor-pointer hover:text-red-500">
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
        </div>
     );
}
 
export default SalesTransactionTable;