import React from "react";

const SupplierTable = ({suppliers, modalOn}) => {
    return ( 
        <div className="grid gri-cols-1">
            <table className="table-auto w-full text-xs text-center">
                <thead className="border-b bg-gray-100">
                    <tr className="grid grid-cols-6">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Total supplies</th>
                        <th className="px-4 py-2">Total payments</th>
                        <th className="px-4 py-2">outstanding</th>
                    </tr>
                </thead>
                <tbody className="">
                    {suppliers && suppliers.map((supplier)=>(
                        <tr key={supplier._id} onClick={()=>{modalOn(supplier)}} className="border-b hover:bg-primary hover:bg-opacity-20 grid grid-cols-6">
                            <td className="px-4 py-2 bg-primary bg-opacity-50 text-white font-semibold">{supplier.name}</td>
                            <td className="px-4 py-2">{supplier.email}</td>
                            <td className="px-4 py-2">{supplier.phone}</td>
                            <td className="px-4 py-2">{supplier.totalSupplies}</td>
                            <td className="px-4 py-2">{supplier.totalPayments}</td>
                            <td className="px-4 py-2">{supplier.totalSupplies - supplier.totalPayments}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
     );
}
 
export default SupplierTable;