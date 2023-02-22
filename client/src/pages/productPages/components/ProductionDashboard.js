const ProductionDashboard = () => {
    return ( 
        <div className="grid md:grid-cols-4 grid-cols-2 p-5 rounded-md shadow-md ">
            <div className="flex flex-col items-center md:border-r border-primary">
                <h4>INPUT</h4>
            </div>
            <div className="flex flex-col items-center md:border-r border-primary">
                <h4>OUTPUT</h4>
            </div>
            <div className="flex flex-col items-center md:border-r border-primary">
                <h4>TOP SALE</h4>
            </div>
            <div className="flex flex-col items-center">
                <h4>TOP REVENUE</h4>
            </div>
        </div>
     );
}
 
export default ProductionDashboard;