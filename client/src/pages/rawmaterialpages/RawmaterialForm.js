import React, { useState, useEffect } from "react";
import AlertBox from "../../components/AlertBox";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import useFetch from "../../useFetch";

const RawmaterialForm = ({modalOff}) => {

    const [name, setName] = useState('')
    const [netWeight, setNetWeight] = useState('')
    const [netPrice, setNetprice] = useState('')
    const [supplier, setSupplier] = useState('')
    const [pricePerGram, setPricePerGram] = useState('')
    const [reOrderLevel, setReOrderLevel] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const {user} = useAuthContext()
    const {dispatch} = useDataContext()
    const {data} = useFetch(`http://localhost:5500/api/supplier`)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError(`You must be logged in`)
            console.log('no user')
            return
        }

        setIsPending(true)

        const response = await fetch(`http://localhost:5500/api/rawmaterial`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, netWeight, netPrice, reOrderLevel, supplier, pricePerGram}) 
        })

        const json = await response.json()

        if(!response.ok){
            console.log(json)
            setIsPending(false)
            setError(json)
        }
        if(response.ok){
            setName('')
            setNetWeight('')
            setNetprice('')
            setReOrderLevel('')
            setPricePerGram('')
            setSupplier('')
            setIsPending(false)
            console.log(json)
            setSuccess(true)
            dispatch({type: 'CREATE_DATA', payload: json})
        }
    }

    return ( 
        <div className="inset-0 justify-center text-xs fixed justify-items-center bg-primary bg-opacity-10 grid grid-cols-1">
            <div className="md:p-5 flex flex-col gap-y-4 ml-auto mt-10 p-2 shadow md:w-4/12 rounded-md shadow w-full bg-white">
                {success && <AlertBox message={`successfully created new Raw material`}/>}
                {error && <AlertBox message={error}/>}
                <div className='flex flex-row-reverse justify-between'>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 text-red-500 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className="text-sm font-semibold text-center">Register new raw material</h4>
                </div>
                <div className="grid rounded-md grid-cols-1">
                    <form className="grid grid-cols-1 gap-y-2 p-5 bg-white items-center" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                                <h4>name</h4>
                            </label>
                            <input 
                                type="text"
                                onChange={(e)=>{setName(e.target.value)}}
                                value={name}
                                className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2 "
                                
                            />
                        </div>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-0 focus:ring w-full pl-10"/>
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
                                    onChange={(e)=>{setNetWeight(e.target.value)}}
                                    value={netWeight}
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2"
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
                                    onChange={(e)=>{setNetprice(e.target.value)}}
                                    value={netPrice}
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2 "
                                
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
                                    onChange={(e)=>{setPricePerGram(e.target.value)}}
                                    value={netPrice/netWeight}
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2 "
                                
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
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2 "
                                    onChange={(e)=>{setReOrderLevel(e.target.value)}}
                                    value={reOrderLevel}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                    <h4>Supplier</h4>
                                </label>
                                <select
                                    onChange={(e)=>{setSupplier(e.target.value)}}
                                    value={supplier}
                                    className="text-xs border-slate-300 focus:border-slate-300 focus:outline-none font-light rounded p-2 "
                                
                                >
                                    <option value={``}>please select</option>
                                    {data && data.map((supplier)=>(
                                        <option key={supplier._id} value={supplier._id}>{supplier.name}</option>
                                    ))}
                                    
                                </select>
                            </div>

                        </div>
                        
                        
                        <button className="flex justify-center items-center bg-primary p-1 rounded text-white font-semibold">
                            <h4 className="text-sm">Submit</h4>
                            {isPending && <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin mx-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>} 
                        </button>
                    </form>

                </div>
            </div>
            
            
        </div>
     );
}
 
export default RawmaterialForm;