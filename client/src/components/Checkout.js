const Checkout = () => {
    return ( 
        <div className="grid grid-cols-1">
            <div className="flex flex-col p-2 m-2">
                <div className="flex justify-between font-bold text-sm">
                    <h4>Pay invoice:</h4>
                    <h4>$155</h4>
                </div>
                <div className="flex justify-center my-2">
                    <button className="p-2 border border-silver-100 w-6/12 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                        <h4 className="mx-1">Credit Card</h4>
                    </button>
                    <button className="px-4 text-white bg-purple-900 mx-2 w-6/12">Paypal</button>
                </div>
            </div>
            <form className="grid grid-cols-1 mt-5 mx-2">
                <div className="flex justify-between text-gray-500">
                    <label htmlFor="" className="text-gray-500">Name on card</label>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h4 className="mx-1">scan card</h4>
                    </div>
                </div>
                <input type="text" className="text-xs mt-1 border-none bg-purple-100" />
                <label htmlFor="" className="mt-3 text-gray-500">Card Number</label>
                <input type="number" name="" id="" className="border-none bg-purple-100 text-xs" />
                <div className="flex mt-3">
                    <div className="flex flex-col w-6/12">
                        <label htmlFor="" className="text-gray-500">Expiry Date</label>
                        <input type="month" name="" id="" className="text-xs border-none bg-purple-100" />
                    </div>
                    <div className="flex flex-col w-6/12 mx-2">
                        <label htmlFor="" className="text-gray-500">Security code</label>
                        <input type="password" name="" id="" className="text-xs border-none bg-purple-100" />
                    </div>
                </div>
                <div className="flex mt-5">
                    <input type="checkbox" name="" id="" />
                    <h4 className="mx-2">Save Card</h4>
                </div>
                <input type="button" value="send" className="mt-5 px-2 py-4 font-semibold bg-purple-900 text-white" />
            </form>
        </div>
     );
}
 
export default Checkout;