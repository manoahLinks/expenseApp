import React, { useEffect, useState } from "react"

const RawmaterialDetail = ({modalOff, material}) => {
    return ( 
        <div className="grid grid-cols-1  fixed inset-0 bg-primary items-center justify-center justify-items-center shadow-lg bg-opacity-20">
            <div className="flex flex-col gap-y-4 md:w-4/12 w-full mt-10 bg-white p-5">
                <div className="grid grid-cols-3 p-2">
                    <div onClick={modalOff} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 hover:bg-slate-300 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-md col-span-2">Raw-material Details</h4>
                </div>

                <div className="flex justify-between">
                    <h4 className="text-sm font-bold">no: <small className="font-light">{material._id}</small></h4>
                    <div className="flex gap-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                        <h4>Edit</h4>
                    </div>
                </div>

             
                    <form className="grid grid-cols-1 self-center text-md gap-y-4 md:gap-x-8">
                        <div className="flex flex-col">
                            <label className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                                <h4>name</h4>
                            </label>
                            <input 
                                type="text"
                                className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                value={material.name}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-8">
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                    </svg>
                                    <h4>Net-weight</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                    value={material.netWeight}
                                />
                            </div>
    
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <h4>Net-price</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 rounded font-light p-2 bg-gray-50 text-xs md:text-md"
                                    value={material.netPrice}
                                />
                            </div>
    
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                    </svg>
                                    <h4>price per gram</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                    value={material.netPrice/material.netWeight}
                                />
                            </div>
    
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                    </svg>
                                    <h4>re-order level</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                    value={material.reOrderLevel}
                                />
                            </div>
    
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                    <h4>Qty Avail.</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                />
                            </div>
    
                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                    <h4>Worth of stock</h4>
                                </label>
                                <input 
                                    type="text"
                                    className="border-slate-300 font-light rounded p-2 bg-gray-50 text-xs md:text-md"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>time: <small className="text-blue-700">{material.createdAt}</small></h4>
                        </div>
                        <div className="grid grid-cols-3 gap-x-4 mt-5 md:mt-8">
                            <button onClick={modalOff} className="border md:p-2 hover:rounded-full rounded border-primary text-primary p-1">cancel</button>
                            <button className="rounded p-1 md:p-2 bg-primary hover:bg-opacity-50 text-white col-span-2">submit</button>
                        </div>
                    </form>
                
            </div>

        </div>
     );
}
 
export default RawmaterialDetail;