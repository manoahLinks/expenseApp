import React from "react";

const ProductTable = ({data}) => {
    return ( 
        <div className="md:block hidden grid grid-cols-1">
            <table className="table-auto w-full text-xs text-left shadow">
                <thead>
                    <tr className="border-b grid grid-cols-6">
                        <td className="px-4 py-2">Name</td>
                        <td className="px-4 py-2">cost of prod.</td>
                        <td className="px-4 py-2">Prod price</td>
                        <td className="px-4 py-2">market price</td>
                        <td className="px-4 py-2">Total doughweight</td>
                        <td className="px-4 py-2">Qty per bag</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((product)=> (
                        <tr key={product._id} className={`grid grid-cols-6 hover:bg-gray-100`}>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{`nil`}</td>
                            <td className="px-4 py-2">{product.productionPrice}</td>
                            <td className="px-4 py-2">{product.marketPrice}</td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">{product.productBenchMark}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
     );
}
 
export default ProductTable;