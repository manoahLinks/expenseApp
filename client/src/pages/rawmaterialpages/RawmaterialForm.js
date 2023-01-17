import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const RawmaterialForm = () => {

    const [name, setName] = useState('')
    const [netWeight, setNetWeight] = useState('')
    const [netPrice, setNetprice] = useState('')
    const [pricePerGram, setPricePerGram] = useState('')
    const [reOrderLevel, setReOrderLevel] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {user} = useAuthContext()
    const {dispatch} = useDataContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError(`You must be logged in`)
            console.log('no user')
            return
        }

        setIsPending(true)

        const response = await fetch(`https://expesetracker.herokuapp.com/api/rawmaterial`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, netWeight, netPrice, reOrderLevel}) 
        })

        const json = await response.json()

        if(!response.ok){
            console.log(json.error)
            setIsPending(false)
            setError(json.error)
        }
        if(response.ok){
            setName('')
            setNetWeight('')
            setNetprice('')
            setReOrderLevel('')
            setPricePerGram('')
            setIsPending(false)
            console.log(json)
            dispatch({type: 'CREATE_DATA', payload: json})
        }
    }

    return ( 
        <div className="grid grid-cols-1 p-2 gap-y-4">
            <h4 className="text-sm font-semibold">Register new raw material</h4>
            <form className="grid grid-cols-1 gap-y-4 p-5 items-center rounded-lg bg-gray-100 " onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="materialName">Name :</label>
                    <input 
                        type="text"
                        id="materialName"
                        className="border-none rounded-md text-sm font-light"
                        placeholder="enter name"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name} 
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="netweight">net weight :</label>
                    <input 
                        type="number"
                        id="netweight"
                        className="border-none rounded-md text-sm font-light"
                        placeholder="net weight"
                        onChange={(e)=>{setNetWeight(e.target.value), setPricePerGram(netPrice/netWeight)}}
                        value={netWeight} 
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="price">Price :</label>
                    <input 
                        type="number"
                        id="price"
                        className="border-none text-sm rounded-md font-light"
                        placeholder="net price"
                        onChange={(e)=>{setNetprice(e.target.value), setPricePerGram(netPrice/netWeight)}}
                        value={netPrice} 
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="pricepergram">Price per gram :</label>
                    <input 
                        type="number"
                        className="border-none text-sm rounded-md font-light text-green-500"
                        placeholder="price per gram"
                        onChange={(e)=>{setPricePerGram(netPrice/netWeight)}}
                        value={pricePerGram} 
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price">Re-order level :</label>
                    <input 
                        type="number"
                        id="reorder"
                        className="border-none rounded-md text-sm font-light"
                        placeholder="enter re-order level"
                        onChange={(e)=>{setReOrderLevel(e.target.value)}}
                        value={reOrderLevel} 
                    />
                </div>
                
                
                <button className="flex justify-center items-center bg-green-500 p-2 rounded-lg text-white font-semibold">
                    <h4 className="text-sm">Submit</h4>
                    {isPending && <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin mx-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>} 
                </button>
            </form>
        </div>
     );
}
 
export default RawmaterialForm;