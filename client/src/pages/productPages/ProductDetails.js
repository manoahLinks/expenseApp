import {useState, useEffect} from "react"

const ProductDetails = ({modalOff, product}) => {

    const [viewRecipe, setViewRecipe] = useState(false)

    const toggleRecipe = () => {
        if(!viewRecipe){
            setViewRecipe(true)
        }else{
            setViewRecipe(false)
        }
    }

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-1 items-center justify-items-center fixed inset-0 bg-primary bg-opacity-20">
            <div className="flex flex-col gap-y-4 p-5 mt-10 md:w-4/12 w-full shadow-lg rounded-lg bg-white ">
                <div className="flex flex-row-reverse justify-between">
                    <div onClick={modalOff} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 hover:text-red-500 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> 
                    </div>
                    <h4 className="cols-span-2">Product details</h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="text-sm font-bold">Product</h4>
                    <div className="flex gap-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-300">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                        <h4>Edit</h4>
                    </div>
                </div>
                <form className="gap-y-4 grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Name:</h4>
                        <h4 className="font-semibold text-blue-500">{product.name}</h4> 
                    </div>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-slate-400'>Rawmaterials:</h4>
                        <svg onClick={toggleRecipe} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${viewRecipe ? `rotate-90` : `rotate-0`}`}>
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    {viewRecipe && <table className={``}>
                        <thead>
                            <tr className='grid grid-cols-3'>
                                <th>Material</th>
                                <th>Qty</th>
                                <th>cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {product.materials[0].map((material)=>(
                            <tr className='grid grid-cols-3'>   
                                <td>{material.rawmaterial}</td>
                                <td>{material.qty}</td>
                                <td>{material.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>}

                    <div className="grid grid-cols-1 p-2 bg-slate-50">
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>Total dough weight:</h4>
                            <h4></h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>Total cost of recipe:</h4>
                            <h4></h4> 
                        </div>
                    </div>
                    <div className='grid grid-cols-1 rounded-lg bg-slate-50 gap-y-2 p-2'>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>cost of labour:</h4>
                            <h4>N{product.costOfLabour}</h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>cost of rent:</h4>
                            <h4>N{product.costOfRent}</h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>cost of energy:</h4>
                            <h4>N{product.costOfEnergy}</h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>cost of packaging:</h4>
                            <h4>N{product.costOfPackaging}</h4> 
                        </div>
                    </div>
                    <div className='grid grid-cols-1 p-2 bg-slate-50'>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>Production Benchmark:</h4>
                            <h4></h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>sales Benchmark:</h4>
                            <h4></h4> 
                        </div>
                    </div>
                    <div className='grid grid-cols-1 p-2 bg-slate-50'>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>Production price:</h4>
                            <h4>N{product.productionPrice}</h4> 
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='text-slate-400'>market price:</h4>
                            <h4>N{product.marketPrice}</h4> 
                        </div>
                    </div>
                    
                    
                </form>
            </div>
            
        </div>
     );
}
 
export default ProductDetails;