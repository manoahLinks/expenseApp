const RawmaterialTable = ({materials}) => {
    return ( 
        <div className="grid grid-cols-1">
            <table className="table table-fixed w-full text-left text-xs border-collapse">
                <thead>
                    <tr className="">
                        <th className="border px-4 py-2">Raw material</th>
                        <th className="border px-4 py-2">net weight <sub>grms</sub></th>
                        <th className="border px-4 py-2">price</th>
                        <th className="border px-4 py-2">price <sup>-grm</sup></th>
                        <th className="border px-4 py-2">Purchases</th>
                        <th className="border px-4 py-2">Qty usage </th>
                        <th className="border px-4 py-2">Qty Avail.</th>
                        <th className="border px-4 py-2">status</th>
                    </tr>
                </thead>
                <tbody>
                {materials && materials.map((material)=>(
                    <tr className="">
                        <td className="border px-4 py-2">{material.name}</td>
                        <td className="border px-4 py-2">{material.netWeight}</td>
                        <td className="border px-4 py-2">{material.netPrice}</td>
                        <td className="border px-4 py-2 overflow-hidden">{material.netWeight/material.netPrice}</td>
                        <td className="border px-4 py-2">{material.totQtyPurchased}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{material.qtyAvailable}</td>
                        <td className="border px-4 py-2">{material.qtyAvailable < material.reOrderLevel ? 'low': 'instock'}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
        
     );
}
 
export default RawmaterialTable;