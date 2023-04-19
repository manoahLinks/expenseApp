const ProductGrid = ({modalOn, data}) => {
    return ( 
        <div className="flex flex-col block md:hidden bg-2 rounded-lg bg-white">
            {data && data.map((product)=>(
                <tr className="shadow-md rounded-md p-2">
                    <h4>{product.name}</h4>
                </tr>       
        
            ))}
            
        </div>
     );
}
 
export default ProductGrid;