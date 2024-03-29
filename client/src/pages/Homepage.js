import { Link } from "react-router-dom";

const HomePage = () => {
    return ( 
        <div className="grid grid-cols-1 md:justify-items-center md:p-5">

            <div className="flex gap-x-4 items-center md:block hidden border">
                
            </div>
            <div className="md:hidden block grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 md:gap-x-4 p-2">
                <Link to={`/myprofile`} className="hover:bg-gray-200 shadow-md flex flex-col bg-white gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-male-user-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">My Profile</h4>
                </Link>
                <Link to={`/sales`} className="hover:bg-gray-200 shadow-md flex flex-col bg-white gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-shopping-cart-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">Sales</h4>
                </Link>
                <Link to={`/rawmaterial`} className="hover:bg-gray-200 shadow-md flex flex-col bg-white gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-wheat-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">Raw Materials</h4>
                </Link>
                <Link to={`/product`} className="hover:bg-gray-200 shadow-md flex flex-col bg-white gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-walmart-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">Products</h4>
                </Link>
                <Link to={`/marketing`} className="hover:bg-gray-200 shadow-md flex flex-col bg-white gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-people-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">Marketing</h4>
                </Link>
                <Link to={`/finance`} className="transition ease-in-out duration-300 delay-150 bg-white hover:bg-green-200 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-stack-of-money-48.png`)} alt="" />}
                    <h4 className="text-center md:text-sm font-semibold">Finance</h4>
                </Link>
            </div>
            
        </div>
     );
}
 
export default HomePage;