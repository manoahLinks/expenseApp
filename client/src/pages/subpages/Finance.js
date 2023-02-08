import { Link } from "react-router-dom";

const Finance = () => {
    return ( 
        <div className="flex flex-col justify-evenly p-2 gap-y-4">
            <h4 className="text-xl text-center font-light p-5">Finance</h4>
            <div className="grid grid-cols-1 gap-y-6 items-center">
               <div className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="" src={require(`../../assets/icons8-safe-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Create a new Account</h4>
               </div>
               <Link to={`/finance/expense/new`} className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="" src={require(`../../assets/icons8-cash-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Make an expenditure</h4>
               </Link>
               <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="" src={require(`../../assets/icons8-in-transit-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Supplier's Bill/payment</h4>
               </div>
               <Link to={`/finance/transactions`} className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="" src={require(`../../assets/icons8-list-view-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">View my transactions</h4>
               </Link>
            </div>
        </div>
     );
}
 
export default Finance;