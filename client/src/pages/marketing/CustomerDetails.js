import React from "react";

const CustomerDetails = ({modalOff, customer}) => {

    return ( 
        <div className="flex flex-col justify-center items-center md:grid-cols-4 fixed inset-0 bg-primary bg-opacity-20">
            <div className="flex flex-col md:mt-12 md:w-4/12 w-full shadow-lg rounded-lg bg-white md:p-5 p-2 gap-y-4">
                <div className="grid grid-cols-3 text-green-700 border-b p-2">
                    <div className="flex rounded-full" onClick={modalOff}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  strokeWidth={2.5} fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 hover:bg-slate-200 cursor-pointer rounded-full">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </div>
                    <h4 className="text-sm text-primary font-semibold col-span-2">Customer Details</h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="font-bold text-sm">Customer: <small className="font-light">{customer._id}</small></h4>
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
                        <label className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-slate-300">
                                <path fillRule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                            </svg>
                            <h4>Customer name</h4>
                        </label>
                        <input 
                            type="text"
                            className="border-slate-300 text-xs p-2 rounded bg-gray-50 md:text-sm"
                            value={customer.name}
                        />
                    </div>
                    <div className="grid gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 grid-cols-2">
                        <div className="grid grid-cols-1">
                            <label className="gap-x-2 flex" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5 text-slate-300">
                                    <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
                                </svg>
                                <h4>Email</h4>
                            </label>
                            <input 
                                type="email"
                                className="p-2 border-slate-300 rounded text-xs bg-gray-50 md:text-sm"
                                value={customer.email}
                            />
                        </div>

                        <div className="grid grid-cols-1">
                            <label className="gap-x-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5 text-slate-300">
                                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                </svg>
                                <h4>Phone</h4>
                            </label>
                            <input 
                                type="number"
                                className="p-2 border-slate-300 rounded text-xs bg-gray-50 md:text-sm"
                                value={customer.phone}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="gap-x-2 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 md:w-5 md:h-5 text-slate-300">
                                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />    
                            </svg>
                            <h4>Shop address</h4>
                        </label>
                        <input 
                            type="text"
                            className="border-slate-300 p-2 rounded text-xs bg-gray-50 md:text-sm"
                            value={customer.address}
                        />
                    </div>
                    <div className="mt-2">
                        <h4 className="font-light">Time: <small className="font-semibold text-blue-700">{customer.createdAt}</small></h4>
                        <h4 className="font-light">created By: <small className="font-semibold">{`manoahluka@gmail.com`}</small></h4>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4 mt-8">
                        <button onClick={modalOff} className="border rounded hover:rounded-full border-primary text-primary hover:bg-slate-200 p-1 md:p-2">cancel</button>
                        <button className="rounded p-1 bg-primary hover:bg-opacity-50 text-white col-span-2 md:p-2">submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default CustomerDetails;