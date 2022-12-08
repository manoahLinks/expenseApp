import { formatDistanceToNow } from "date-fns";

const ExpenseDetails = ({result, cancelClick}) => {

    return ( 
        <div className="grid grid-cols-1 p-5">
            <div className="text-gray-500 grid grid-cols-2 gap-y-2">
                <h4 className="font-semibold">Expense Type:</h4>
                <h4 >{result.type}</h4>
                <h4 className="font-semibold">Description:</h4>
                <h4 >{result.description}</h4>
                <h4 className="font-semibold">Amount:</h4>
                <h4 >N {result.amount}</h4>
                <h4 className="font-semibold">Status</h4>
                {!result.isDisbursed && <h4 className="">pending</h4> }
                <h4 className="font-semibold">Time created:</h4>
                <h4 className="font-semibold text-blue-600">{formatDistanceToNow(new Date(result.createdAt), {addSuffix:true}) }</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-2 justify-evenly mt-5">
                <button onClick={cancelClick} className="p-2 border border-silver-100 text-zinc-500 rounded-full">Cancel</button>
                <button className="p-2 border border-purple-900 text-purple-900 rounded-full">Disburse</button>
            </div>
        </div>    
    
     );
}
 
export default ExpenseDetails;