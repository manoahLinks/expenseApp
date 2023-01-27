const RawMaterialAnalytics = () => {
    return ( 
        <div className="grid grid-cols-1">
             <div className="flex flex-col gap-y-2 border border-light rounded-lg m-2 p-2">
                <h4 className="text-center font-semibold">STORE</h4>
                <table className="flex flex-col">
                    <thead className="grid grid-cols-5 p-2 border bg-gray-50">
                        <th className="text-center">Product</th>
                        <th className="text-center">Purchases</th>
                        <th className="text-center">Usage</th>
                        <th className="text-center">Available</th>
                        <th className="text-center">Remark</th>
                    </thead>
                    <tbody className="grid grid-cols-1 p-2 gap-y-2 border">
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Flour</td>
                            <td className="text-center">2000</td>
                            <td className="text-center">150</td>
                            <td className="text-center">1850</td>
                            <td className="text-center bg-green-200 text-green-500 rounded-md">in stock</td>
                        </tr>

                        <tr className="grid grid-cols-5">
                            <td className="text-center">Sugar</td>
                            <td className="text-center">80</td>
                            <td className="text-center">75</td>
                            <td className="text-center">5</td>
                            <td className="text-center bg-red-200 text-red-500 rounded-md">low</td>
                        </tr>

                        <tr className="grid grid-cols-5">
                            <td className="text-center">Butter</td>
                            <td className="text-center">25</td>
                            <td className="text-center">15</td>
                            <td className="text-center">10</td>
                            <td className="text-center bg-amber-100 text-amber-500 rounded-md">re-order</td>
                        </tr>
                        
                    </tbody>
                </table>

                  
                <div className="grid grid-cols-1 gap-y-2 p-2">
                    <div className="grid grid-cols-3 gap-x-2 ">
                        <div className="grid grid-cols-1 items-center gap-y-1 border p-1 rounded-md">
                            <h4 className="font-light text-center">worth of Purchase</h4>
                            <h4 className="font-semibold text-center">N6,550,000</h4>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-y-1 border p-1 rounded-md">
                            <h4 className="font-light text-center">Worth of Usage</h4>
                            <h4 className="font-semibold text-center">N2,500,000</h4>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-y-1 border p-1 rounded-md">
                            <h4 className="font-light text-center">Worth of Available stock</h4>
                            <h4 className="font-semibold text-center">N4,050,000</h4>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
     );
}
 
export default RawMaterialAnalytics;