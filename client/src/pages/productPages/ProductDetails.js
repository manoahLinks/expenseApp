const ProductDetails = ({modalOff}) => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-4 fixed  inset-0 bg-primary bg-opacity-20">
            <div>

            </div>
            <div className="flex flex-col gap-y-4 p-5 modal my-16 md:col-span-2 bg-white overflow-y-scroll">
                <div className="grid grid-cols-3">
                    <div onClick={modalOff} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
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
                    <div className="flex flex-col">
                        <label className="flex gap-x-2" >
                            <h4>name</h4>
                        </label>
                        <input 
                            type="text"
                            className="border-none bg-gray-50 p-2 text-xs md:text-sm" 
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 md:gap-x-4">
                        <div className="flex justify-between items-center">
                            <h4>Recipe <strong>(rawmaterials)</strong></h4>
                            <div className="flex gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                <div className="rounded-md flex gap-x-2 items-center bg-green-500 p-1 text-white font-semibold">
                                    <h4>add</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-x-1">
                            <input 
                                type="text"
                                className="text-xs md:text-sm border-none rounded col-span-2 bg-gray-100" 
                            />
                            <input 
                                type="number"
                                className="border-none rounded bg-gray-100 text-xs md:text-sm" 
                            />
                            <h4 className="p-2">12.5</h4>
                            <input 
                                type="number"
                                className="border-none rounded bg-gray-100 text-xs md:text-sm" 
                            />
                            
                            
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 ">
                        <div className="flex ">
                            <label>
                                <h4>total dough weight</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>
                                <h4>cost of Recipe</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>
                                <h4>Labour</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Packaging</h4>
                            </label>
                            <input 
                                type="number"
                                className="text-xs md:text-sm rounded font-light" 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Enery</h4>
                            </label>
                            <input 
                                type="number"
                                className="text-xs md:text-sm rounded font-light" 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Rent</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Production price</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Market price</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Production Benchmark</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>
                                <h4>Sales Benchmark</h4>
                            </label>
                            <input 
                                type="number" 
                                className="text-xs md:text-sm rounded font-light"
                            />
                        </div>
                    </div>

                    <div className="p-5 bg-gray-300 bg-opacity-50">
                        <h4></h4>
                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default ProductDetails;