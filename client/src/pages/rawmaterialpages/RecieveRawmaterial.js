const RecieveRawmaterial = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
                <img src={require(`../../assets/Logistics-amico.png`)} alt="recieve material" />
            </div>
            <div className="flex flex-col gap-y-4">
                <h4 className="text-center text-primary">Recieve supply</h4>
                <form className="grid grid-cols-1 gap-y-2">
                    <label className="text-xs">Raw material</label>
                    <select
                        className="border-slate-300 text-xs"
                    >
                        <option value="">select rawmaterial</option>
                        <option value="">sugar</option>
                        <option value="">sugar</option>
                        <option value="">sugar</option>
                        <option value="">sugar</option>
                    </select>
                    <div className="grid grid-cols-2 gap-y-2">
                        <label htmlFor="">Quantity</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                        />

                        <label htmlFor="">Amount</label>
                        <input 
                            type="number"
                            className="text-xs border-slate-300"
                        />

                        <label htmlFor="">supplier</label>
                        <select
                            className="text-xs border-slate-300"
                        >
                            <option value="">select supplier</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4 mt-8">
                        <button className="p-2 text-primary font-semibold rounded border border-primary hover:rounded-full">cancel</button>
                        <button className="p-2 col-span-2 text-white font-semibold rounded bg-primary hover:bg-opacity-50">Confirm</button>
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default RecieveRawmaterial;