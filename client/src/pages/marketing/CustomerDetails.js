
const CustomerDetails = ({modalOff, customer}) => {

    return ( 
        <div className="grid h-screen grid-cols-1 fixed inset-0 bg-gray-300 bg-opacity-20">
            <div>

            </div>
            <div id="modal" className="flex flex-col bg-white p-5 gap-y-8">
                <div className="flex text-green-700">
                    <div className="flex bg-green-200 rounded-full" onClick={modalOff}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </div>
                    <h4 className="text-sm">Customer Details</h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="font-bold text-sm">Customer</h4>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                        <h4 className="font-semibold text-xs">Edit</h4>
                    </div>
                </div>
                <form className="grid grid-cols-1 gap-y-4">
                    <div className="flex flex-col">
                        <label className="flex gap-x-1 text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                            </svg>
                            <h4>Customer name</h4>
                        </label>
                        <input 
                            type="text"
                            className="border-none text-xs p-2 rounded bg-green-50"
                        />
                    </div>
                    <div className="grid text-green-700 gap-x-2 grid-cols-2">
                        <div className="grid grid-cols-1">
                            <label className="text-green-700 gap-x-2 flex" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
                                </svg>
                                <h4>Email</h4>
                            </label>
                            <input 
                                type="email"
                                className="p-2 border-none rounded text-xs bg-green-50"
                            />
                        </div>

                        <div className="grid grid-cols-1">
                            <label className="text-green-700 gap-x-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                </svg>
                                <h4>Phone</h4>
                            </label>
                            <input 
                                type="number"
                                className="p-2 border-none rounded text-xs bg-green-50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-green-700">
                        <label className="text-green-700 gap-x-2 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />    
                            </svg>
                            <h4>Shop address</h4>
                        </label>
                        <input 
                            type="text"
                            className="border-none p-2 rounded text-xs bg-green-50"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                        <button onClick={modalOff} className="border rounded border-green-700 text-green-700 p-1">cancel</button>
                        <button className="rounded p-1 bg-green-700 text-white">update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default CustomerDetails;