import React from 'react';
import BarChart from '../../components/BarChart'

const RawMaterialAnalytics = () => {
    return ( 
        <div className="grid grid-cols-1">
             <div className="flex flex-col gap-y-2 md:gap-y-4 rounded-lg p-3">
                <h4 className="text-center font-semibold">STORE</h4>
                <table className="flex flex-col">
                    <thead className="grid grid-cols-5 p-2 border-t bg-gray-50">
                        <th className="text-center">Product</th>
                        <th className="text-center">Purchases</th>
                        <th className="text-center">Usage</th>
                        <th className="text-center">Available</th>
                        <th className="text-center">Remark</th>
                    </thead>
                    <tbody className="grid grid-cols-1 p-2 gap-y-2 ">
                        <tr className="grid grid-cols-5 border-b p-2 hover:bg-slate-50">
                            <td className="text-center">Flour</td>
                            <td className="text-center">2000</td>
                            <td className="text-center">150</td>
                            <td className="text-center">1850</td>
                            <td className="flex text-slate-500 rounded items-center gap-x-2">
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4>in stock</h4>
                            </td>
                        </tr>

                        <tr className="grid grid-cols-5 border-b p-2 hover:bg-slate-50">
                            <td className="text-center">Sugar</td>
                            <td className="text-center">80</td>
                            <td className="text-center">75</td>
                            <td className="text-center">5</td>
                            <td className="flex text-slate-500 rounded items-center gap-x-2">
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4>re-order</h4>
                            </td>
                        </tr>

                        <tr className="grid grid-cols-5 border-b p-2 hover:bg-slate-50">
                            <td className="text-center">Butter</td>
                            <td className="text-center">25</td>
                            <td className="text-center">15</td>
                            <td className="text-center">10</td>
                            <td className="flex text-slate-500 rounded  items-center gap-x-2">
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4>low</h4>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className="grid grid-cols-1 gap-y-2 p-2">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2 gap-x-2 ">
                        <div className="flex flex-col gap-y-2 md:gap-y-4 shadow-lg md:p-3 p-1 rounded-md">
                            <div className='flex justify-between items-center'>
                                <div className='flex self-start p-1 rounded bg-primary bg-opacity-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-primary">
                                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="font-light text-center">worth of Purchase</h4>
                            <h4 className="font-semibold md:text-md text-slate-400 text-center">N6,550,000</h4>
                        </div>

                        <div className="flex flex-col gap-x-2 md:gap-y-4 shadow-lg gap-y-2 bg-primary bg-opacity-10 md:p-3 p-1 rounded-md">
                            <div className='flex justify-between items-center'>
                                <div className='flex self-start p-1 rounded bg-primary bg-opacity-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-primary">
                                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <h4 className="font-light ">Worth of Usage</h4>
                            <h4 className="font-semibold md:text-md text-primary text-center">N2,500,000</h4>
                        </div>

                        <div className="flex flex-col gap-y-2 md:gap-y-4 shadow-lg md:p-3 p-1 rounded-md">
                            <div className='flex justify-between items-center'>
                                <div className='flex self-start p-1 rounded bg-primary bg-opacity-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-primary">
                                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="font-light text-center">Worth of Available stock</h4>
                            <h4 className="font-semibold md:text-md text-primary text-center">N4,050,000</h4>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='grid grid-cols-1'>
            
            </div>
        </div>
     );
}
 
export default RawMaterialAnalytics;