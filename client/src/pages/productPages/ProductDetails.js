import {useState, useEffect} from "react"

const ProductDetails = ({modalOff, product}) => {

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-1 fixed inset-0 bg-primary bg-opacity-20">
            <div className="flex flex-col gap-y-4 p-5 mt-10 ml-auto md:w-4/12 w-full overflow-y-scroll bg-white ">
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                        <h4>Edit</h4>
                    </div>
                </div>
                <form className="gap-y-2 md:gap-y-4 flex flex-col">
                    <h4>{product.name}</h4>
                </form>
            </div>
            
        </div>
     );
}
 
export default ProductDetails;