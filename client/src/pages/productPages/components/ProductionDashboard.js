import BarChart from "../../../components/BarChart";
import PieChart from "../../../components/PieChart";

const ProductionDashboard = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1 md:col-span-2 justify-evenly md:gap-x-4 p-5">
                {/* product card */}
                <div className="flex flex-col shadow md:p-3 p-2 bg-white rounded-lg text-xs gap-y-6">
                    <div className="flex justify-between">
                        <div className="flex ">
                            <small className="font-semibold">TOTAL PRODUCTION TREND</small>
                        </div>
                        <select className="text-xs border-slate-300 rounded" >
                            <option value="">monthly</option>
                            <option value="">weekly</option>
                            <option value="">daily</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <small>Bags produced</small>
                            <div className="flex items-baseline">
                                <h4 className="text-xl">1,500</h4>
                                <small>bags</small>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <small>loaves yield</small>
                            <div className="flex items-baseline">
                                <h4 className="text-xl">78,500</h4>
                                <small>loaves</small>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <BarChart/>
                    </div>
                </div>

                
                
            </div>

            <div className="flex flex-col">

            </div>
        </div> 
        
     );
}
 
export default ProductionDashboard;