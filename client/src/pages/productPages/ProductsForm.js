const ProductsForm = () => {
    return ( 
        <div className="grid grid-cols-1 gap-y-4">
            <div className="flex justify-between p-2">
                <h4 className="font-semibold text-sm">Create a recipe</h4>
                <button className="p-1 bg-green-300 flex items-center justify-center text-white rounded-md">
                    <h4>Add</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <table className="grid grid-cols-1 m-2  bg-gray-100 rounded-lg">
                <thead className="grid text-center p-2 grid-cols-4 bg-gray-50">
                    <th>Raw Material</th>
                    <th>weight (grams)</th>
                    <th>Cost</th>
                    <th>Action</th>
                </thead>
                <tbody className="grid grid-cols-1">

                    <tr className="grid grid-cols-4 text-center gap-x-1 p-2 items-center justify-center">
                        
                        <select className="text-xs border-none rounded-md">
                            <option value="">flour</option>
                            <option value="">sugar</option>
                        </select>
                    
                        <input 
                            type="number"
                            className="text-xs border-none rounded-md"  
                        />
                    
                        <input 
                            type="number" 
                            className="text-xs border-none rounded-md"
                        />
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-200 self-center">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                      
                    </tr>

                </tbody>
            </table>
        </div>
     );
}
 
export default ProductsForm;