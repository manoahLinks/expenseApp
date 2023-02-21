import React from "react";

const RawmaterialTable = ({materials, modalOn}) => {
    return ( 
        <div className="grid grid-cols-1">
            <table className="table table-auto w-full text-center text-xs border-collapse">
                <thead>
                    <tr className="border-b bg-gray-100 ">
                        <th className="px-4 py-2">Raw material</th>
                        <th className="px-4 py-2">net weight <sub>grms</sub></th>
                        <th className="px-4 py-2">price</th>
                        <th className="px-4 py-2">price <sup>-grm</sup></th>
                        <th className="px-4 py-2">Purchases</th>
                        <th className="px-4 py-2">Qty usage </th>
                        <th className="px-4 py-2">Qty Avail.</th>
                        <th className="px-4 py-2">status</th>
                    </tr>
                </thead>
                <tbody>
                {materials && materials.map((material)=>(
                    <tr className="border-b hover:bg-opacity-20 hover:bg-primary" onClick={modalOn} key={material._id}>
                        <td className="px-4 py-2 text-white bg-opacity-50 bg-primary font-bold">{material.name}</td>
                        <td className="px-4 py-2">{material.netWeight}</td>
                        <td className="px-4 py-2">{material.netPrice}</td>
                        <td className="px-4 py-2 overflow-hidden">{material.netWeight/material.netPrice}</td>
                        <td className="px-4 py-2">{material.totQtyPurchased}</td>
                        <td className="px-4 py-2">{}</td>
                        <td className="px-4 py-2">{material.qtyAvailable}</td>
                        <td className="px-4 py-2">{material.qtyAvailable < material.reOrderLevel ? 'low': 'instock'}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
        
     );
}
 
export default RawmaterialTable;