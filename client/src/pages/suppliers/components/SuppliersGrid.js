const SuppliersGrid = ({suppliers}) => {
    return ( 
        <div className="flex flex-col block gap-y-2 md:hidden bg-white rounded-lg p-2">
            {suppliers && suppliers.map((supplier)=>(
                <div className="flex items-center justify-between border p-1 rounded-md">
                    <h4>{supplier.name}</h4>
                </div>
            ))}
            
        </div>
     );
}
 
export default SuppliersGrid;