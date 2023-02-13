const CustomerTable = ({customers}) => {
    return ( 
        <div className="grid grid-cols-1 p-5">
            <table className="table table-auto w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">email</th>
                        <th className="px-4 py-2">shop address</th>
                        <th className="px-4 py-2">phone</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {customers && customers.map((customer)=>(
                    <tr className="">
                        <td className="px-4 py-2">{customer.name}</td>
                        <td className="px-4 py-2">{customer.email}</td>
                        <td className="px-4 py-2">{customer.address}</td>
                        <td className="px-4 py-2">0{customer.phone}</td>
                        <td className="px-4 py-2">{}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
        
     );
}
 
export default CustomerTable;