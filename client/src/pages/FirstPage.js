import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return ( 
        <div className="grid grid-cols-1 items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 p-2 md:p-5">
                <Link to={`/myprofile`} className="border hover:bg-gray-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-male-user-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">My Profile</h4>
                </Link>
                <Link to={`/sales`} className="border hover:bg-gray-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-shopping-cart-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Sales</h4>
                </Link>
                <Link to={`/rawmaterials`} className="border hover:bg-gray-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-wheat-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Raw Materials</h4>
                </Link>
                <Link to={`/products`} className="border hover:bg-gray-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-walmart-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Products</h4>
                </Link>
                <Link to={`/marketing`} className="border hover:bg-gray-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-crowd-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Marketing</h4>
                </Link>
                <Link to={`/finance`} className="border hover:bg-green-200 hover:border-gray-500 border-gray-300 shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-stack-of-money-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Finance</h4>
                </Link>
            </div>
            <div className="grid grid-cols-1 m-2 p-2 border rounded-md">
                <h4 className="font-semibold text-center">Dashboard</h4>
                <table className="grid grid-cols-1 gap-y-2  p-2">
                    <h4 className="font-light">Stock analysis</h4>
                    <thead className="grid grid-cols-5 border items-center bg-gray-50 p-1">
                        <th className="text-center">Product</th>
                        <th className="text-center">BAGS</th>
                        <th className="text-center">PROD</th>
                        <th className="text-center">SALES</th>
                        <th className="text-center">Variance</th>
                    </thead>
                    <tbody className="grid grid-cols-1 gap-y-2">
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Family</td>
                            <td className="text-center">12</td>
                            <td className="text-center">209</td>
                            <td className="text-center">120</td>
                            <td className="text-center bg-amber-100 text-amber-500 rounded-md">0.4</td>
                        </tr>
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Butter</td>
                            <td className="text-center">4</td>
                            <td className="text-center">67</td>
                            <td className="text-center">200</td>
                            <td className="text-center bg-green-100 text-green-500 rounded-md">0.6</td>
                        </tr>
                        <tr className="grid grid-cols-5">
                            <td className="text-center">Jumbo</td>
                            <td className="text-center">5</td>
                            <td className="text-center">90</td>
                            <td className="text-center">122</td>
                            <td className="text-center bg-red-100 text-red-500 rounded-md">0.2</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
     );
}
 
export default Homepage;