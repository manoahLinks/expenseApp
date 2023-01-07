const AnalyticsPage = () => {
    return ( 
        <div className="grid grid-cols-1 gay-y-4 overflow-scroll">
            {/* store */}

            <div className="flex flex-col gap-y-2 border border-light rounded-lg m-2 p-2">
                <h4 className="text-center font-semibold">STORE</h4>
                <table className="flex flex-col">
                    <h4 className="font-light">raw materials</h4>
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

                <h4 className="font-light">Worth of Stock</h4>    
                <div className="grid grid-cols-1 gap-y-2 border border-green-100 rounded-lg p-2">
                    <div className="grid grid-cols-3 gap-x-2 ">
                        <div className="grid grid-cols-1 items-center gap-y-1 shadow-md p-1 rounded-md">
                            <h4 className="font-light text-center">worth of Purchase</h4>
                            <h4 className="font-semibold">N6,550,000</h4>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-y-1 shadow-md p-1 rounded-md">
                            <h4 className="font-light text-center">Worth of Usage</h4>
                            <h4 className="font-semibold">N2,500,000</h4>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-y-1 shadow-md p-1 rounded-md">
                            <h4 className="font-light text-center">Worth of Available stock</h4>
                            <h4 className="font-semibold">N4,050,000</h4>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* production */}

            <div className="grid grid-cols-1 border p-2 m-2 gap-y-2 rounded-lg items-center">
                <h4 className="font-semibold text-center">PRODUCTION</h4>
                <table className="grid grid-cols-1 gap-y-2 ">
                    <h4>Production Yield</h4>
                    <thead className="grid grid-cols-4 border items-center bg-gray-50 p-1">
                        <th className="text-center">Product</th>
                        <th className="text-center">Bags Produced</th>
                        <th className="text-center">Loaves Yielded</th>
                        <th className="text-center">Variance</th>
                    </thead>
                    <tbody className="grid grid-cols-1 gap-y-1">
                        <tr className="grid grid-cols-4">
                            <td className="text-center">Family</td>
                            <td className="text-center">16</td>
                            <td className="text-center">2,500</td>
                            <th className="text-center bg-red-200 text-red-500 rounded-md">0.2</th>
                        </tr>
                        <tr className="grid grid-cols-4">
                            <td className="text-center">Butter</td>
                            <td className="text-center">10</td>
                            <td className="text-center">1,200</td>
                            <th className="text-center bg-green-200 text-green-500 rounded-md">0.5</th>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Dispatch/sales */}

            <div className="grid grid-cols-1 m-2 p-2 border rounded-lg gap-y-2">
                <h4 className="text-center font-semibold">DISPATCH & SALES</h4>
                <table className="grid grid-cols-1 gap-y-2  p-2">
                    <h4 className="font-light">Stock analysis</h4>
                    <thead className="grid grid-cols-5 border items-center bg-gray-50 p-1">
                        <th className="text-center">Product</th>
                        <th className="text-center">Qty recieved</th>
                        <th className="text-center">Qty Sold</th>
                        <th className="text-center">Qty Avail.</th>
                        <th className="text-center">Variance</th>
                    </thead>
                    <tbody className="grid grid-cols-1 gap-y-2">
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Family</td>
                            <td className="text-center">500</td>
                            <td className="text-center">209</td>
                            <td className="text-center">120</td>
                            <td className="text-center bg-amber-100 text-amber-500 rounded-md">0.4</td>
                        </tr>
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Butter</td>
                            <td className="text-center">306</td>
                            <td className="text-center">67</td>
                            <td className="text-center">200</td>
                            <td className="text-center bg-green-100 text-green-500 rounded-md">0.6</td>
                        </tr>
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Jumbo</td>
                            <td className="text-center">115</td>
                            <td className="text-center">90</td>
                            <td className="text-center">122</td>
                            <td className="text-center bg-amber-100 text-amber-500 rounded-md">0.4</td>
                        </tr>
                    </tbody>
                </table>
                <div className="border p-2 m-2">

                </div>
            </div>
        </div>
     );
}
 
export default AnalyticsPage;