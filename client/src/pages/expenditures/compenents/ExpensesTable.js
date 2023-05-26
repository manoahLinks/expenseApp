import format from "date-fns/format";

const ExpensesTable = ({expenses}) => {
    return (
        <div className="flex flex-col gap-y-2 md:p-5 p-2">
            <div className="grid md:grid-cols-5 p-2 grid-cols-2">
                <h4 className="">Date</h4>
                <h4 className="hidden md:block">Category</h4>
                <h4 className="hidden md:block">Description</h4>
                <h4 className="text-blue-500">Amount</h4>
                <div className="grid grid-cols-2">
                    <h4>Approval</h4>
                    <h4>Disbursement</h4>
                </div>
            </div>
            <hr />
            {expenses ? expenses.map((expense)=>(
                <div key={expense._id} className="grid md:grid-cols-5 p-2 grid-cols-2">  
                        <h4>{format(new Date(expense.createdAt), 'dd MMM yyyy')}</h4>
                        <h4>{expense.type}</h4>
                        <h4 className="truncate">{expense.description}</h4>
                        <h4 className="text-blue-500">N{expense.amount}</h4>
                        <div className="grid grid-cols-2 gap-x-2">
                            <h4 className={`${expense.isApproved ? `text-green-500 bg-green-100` : ` text-red-500 bg-red-100`} rounded-md p-1 m-auto whitespace-nowrap` }>
                                {expense.isApproved ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    :
                                    <img className="w-5 h-5" src={require(`../../../assets/icons8-loading-infinity.gif`)} alt="" />  
                                }
                            </h4>
                            
                            <h4 className={`${expense.isDisbursed ? `text-green-500 bg-green-100` : ` text-red-500 bg-red-100`} rounded-md p-1 m-auto whitespace-nowrap` }>
                                {expense.isDisbursed ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    :  `not disbursed`
                                }
                            </h4>   
                        </div>  
                </div>
            )) : <h4>fetching...</h4>} 
        </div>
     );
}
 
export default ExpensesTable;