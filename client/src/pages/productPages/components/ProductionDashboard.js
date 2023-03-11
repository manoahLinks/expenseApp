import BarChart from "../../../components/BarChart";

const ProductionDashboard = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="grid md:grid-cols-2 col-span-2 justify-evenly grid-cols-2 md:gap-x-4 p-5">
                {/* product card */}
                <div className="flex flex-col shadow md:p-3 p-2 bg-white rounded-lg text-xs gap-y-6">
                    <div className="flex justify-between">
                        <div className="flex ">
                            <small className="font-semibold">TOTAL PRODUCTION TREND</small>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <small>Avg this week</small>
                            <div className="flex items-baseline">
                                <h4 className="text-xl">1,500</h4>
                                <small>bags</small>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <small>yield</small>
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

                {/* sales card */}
                <div className="flex flex-col shadow md:p-3 p-2 bg-white text-xs gap-y-6 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex ">
                            <small className="font-semibold">TOTAL SALES TREND</small>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
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
                    
                </div>
                
            </div>

            <div className="flex flex-col">

            </div>
        </div> 
        
     );
}
 
export default ProductionDashboard;