import { useState } from "react";

const RawmaterialForm = () => {

    const [materialName, setMaterialName] = useState('')
    const [netWeight, setNetWeight] = useState('')
    const [netPrice, setNetprice] = useState('')
    const [pricePerGram, setPricePerGram] = useState('')
    const [reOrderLevel, setReOrderLevel] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(netPrice)
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
                        placeholder="enter material name"
                        onChange={(e)=>{setMaterialName(e.target.value)}}
                        value={materialName} 
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
                
                
                <button className="bg-green-500 p-2 text-white font-semibold" disabled>Submit</button>
            </form>
        </div>
     );
}
 
export default RawmaterialForm;