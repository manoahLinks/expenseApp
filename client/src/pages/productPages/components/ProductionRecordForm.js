const ProductionRecordForm = ({modalOff}) => {
    return ( 
        <div className="grid grid-cols-1 items-center overflow-y-scroll justify-items-center inset-0 fixed bg-primary bg-opacity-20 rounded-md">
            <div className="flex flex-col md:gap-y-4 gap-y-2 md:p-5 p-2 bg-white md:w-4/12 w-full rounded-fu;;">
                <div className="flex justify-between items-center">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <hr />
                <form className="grid grid-cols-1 gap-y-2">
                    <select>
                        <option value="">select product</option>
                    </select>
                    
                    <div className="grid grid-cols-2 md:gap-x-8 gap-y-4">
                        <input 
                            type="number"
                            className="text-xs"
                            placeholder="Bags prod."
                        />
                        <h4>cost of prod.</h4>
                        <input 
                            type="number"
                            className="text-xs"
                            placeholder="pan count"

                        />
                        <h4>expected count</h4>
                        <input 
                            type="number" 
                            className="text-xs"
                            placeholder="damage"
                        />
                        <textarea className="col-span-2 text-xs" placeholder="comment" name=""></textarea>
                    </div>
                    
                </form>
                <hr />
                <div className="grid grid-cols-2">
                    <button className="p-2 border-r">cancel</button>
                    <button className="p-2">proceed</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProductionRecordForm;