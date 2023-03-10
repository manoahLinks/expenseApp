import { useState, useEffect } from "react";
import RecieveRawmaterial from "../RecieveRawmaterial";
import UsageForm from '../usage/UsageForm'

const RawmaterialBoard = () => {

    const [modal, setModal] = useState(false)
    const [usageForm, setUsageForm] = useState(false)

    const handleModal = () => {
        setModal(true)
    }

    const modalOff = () => {
        setModal(false) 
    }

    const handleUsageForm = () => {
        setUsageForm(false)
    }

    return ( 
        <div className="flex flex-col text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-4 md:gap-x-6 md:p-3 p-1">

                <div className="shadow rounded-md md:p-3 p-2 flex flex-col gap-y-2 bg-white">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Purchase trend</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
        
                    <div className="flex font-light justify-between items-center p-2">
                        <h4 className="font-semibold">Salt</h4>
                        <div className="flex flex-col">
                            <h4 className="">1500000.87kg</h4>
                            <h4 className="text-green-700">(N12,000,000)</h4>
                        </div>
                        
                    </div>

                    <div className="flex justify-between">
                        <h4>Worth of Purchase</h4>
                        <h4>N129,000</h4>
                    </div>
                    <div className="flex justify-end mt-2 gap-x-2">
                        <button onClick={handleModal} className="p-1 col-span-2  rounded bg-primary text-white">New Purchase</button>
                    </div>
                </div>

                <div className="shadow bg-white rounded-md md:p-3 p-2 flex flex-col gap-y-2">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Daily usage trend</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
        
                    <div className="flex font-light justify-between items-center p-2">
                        <h4 className="font-semibold">Salt</h4>
                        <div className="flex flex-col">
                            <h4 className="">1500000.87kg</h4>
                            <h4 className="text-green-700">(N12,000,000)</h4>
                        </div>
                        
                    </div>

                    <div className="flex justify-between">
                        <h4>Worth of Usage</h4>
                        <h4>N129,000</h4>
                    </div>

                    <div className="flex mt-2 gap-x-2 justify-end">
                        <button onClick={()=>{setUsageForm(true)}} className="p-1 col-span-2  rounded bg-primary bg-opacity-50 hover:bg-opacity-90 text-white">New Usage</button>
                    </div>
                </div>

                <div className="shadow bg-white rounded-md md:p-3 p-2 flex flex-col gap-y-2">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Stock available </h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
        
                    <div className="flex font-light justify-between items-center p-2">
                        <h4>Salt</h4>
                        <h4 className="overflow-hidden">1500000.87kg</h4>
                        <h4 className="overflow-hidden">N12,000,000</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Worth of stock avail.</h4>
                        <h4>N129,000</h4>
                    </div>

                </div>
                {modal && <RecieveRawmaterial modalOff={modalOff}/>}
                {usageForm && <UsageForm modalOff={handleUsageForm} />}
            </div>
        </div>
     );
}
 
export default RawmaterialBoard;