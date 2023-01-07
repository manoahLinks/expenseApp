import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return ( 
        <div className="grid grid-cols-1 items-center">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 m-2">
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-male-user-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">My Profile</h4>
                </Link>
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-shopping-cart-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Sales</h4>
                </Link>
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-wheat-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Raw Materials</h4>
                </Link>
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-walmart-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Products</h4>
                </Link>
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-crowd-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Marketing</h4>
                </Link>
                <Link className="shadow-md flex flex-col gap-y-2 items-center rounded-md p-2">
                    {<img src={require(`../assets/icons8-stack-of-money-48.png`)} alt="" />}
                    <h4 className="text-center font-semibold">Finance</h4>
                </Link>
            </div>
            <div className="flex flex-col m-2 p-2 border rounded-md">
                <h4 className="font-semibold text-center">Dashboard</h4>
            </div>
        </div>
     );
}
 
export default Homepage;