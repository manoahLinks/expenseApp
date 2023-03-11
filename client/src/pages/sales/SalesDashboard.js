import PieChart from "../../components/PieChart";

const SalesDashbord = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid md:grid-cols-2 grid-cols-1 md:col-span-2 justify-evenly md:gap-x-4 p-5">

                {/* sales card */}
                <div className="flex flex-col shadow md:p-3 p-2 bg-white text-xs gap-y-6 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex ">
                            <small className="font-semibold">TOTAL SALES TREND</small>
                        </div>
                        <select className="text-xs border-slate-300 rounded" >
                            <option value="">monthly</option>
                            <option value="">weekly</option>
                            <option value="">daily</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <small>Avg this week</small>
                            <div className="flex items-baseline">
                                <h4 className="text-xl">500</h4>
                                <small>bags</small>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <small>yield</small>
                            <div className="flex items-baseline">
                                <h4 className="text-xl">15,500</h4>
                                <small>loaves</small>
                            </div>
                        </div>    
                    </div>

                    <div>
                        <PieChart></PieChart>
                    </div>
                    
                </div>
            </div>

            <div>

            </div>
        </div>
     );
}
 
export default SalesDashbord;