const RawmaterialTable = ({materials}) => {
    return ( 
        <div className="grid grid-cols-1 p-5">
            <table className="table table-auto w-full text-left text-xs border-collapse">
                <thead>
                    <tr className="">
                        <th className="border px-4 py-2">Raw material</th>
                        <th className="border px-4 py-2">net weight</th>
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
                    <tr className="p-2">
                        <td className="border px-4 py-2">{material.name}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                        <td className="border px-4 py-2">{}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
        
     );
}
 
export default RawmaterialTable;