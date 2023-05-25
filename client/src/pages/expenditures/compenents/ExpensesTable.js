import format from "date-fns/format";


const ExpensesTable = ({expenses}) => {
    return (
        <div className="flex flex-col gap-y-2 md:p-5 p-2">
            <div className="grid md:grid-cols-5 p-2 grid-cols-2">
                <h4 className="">Date</h4>
                <h4 className="hidden md:block">Category</h4>
                <h4 className="hidden md:block">Description</h4>
                <h4 className="text-blue-500">Amount</h4>
                <h4>status</h4>
            </div>
            <hr />
            {expenses ? expenses.map((expense)=>(
                <div key={expense._id} className="grid md:grid-cols-5 p-2 grid-cols-2">  
                        <h4>{format(new Date(expense.createdAt), 'dd MMM yyyy')}</h4>
                        <h4>{expense.type}</h4>
                        <h4 className="truncate">{expense.description}</h4>
                        <h4 className="text-blue-500">N{expense.amount}</h4>
                        <h4></h4>
                </div>
            )) : <h4>fetching...</h4>} 
        </div>
     );
}
 
export default ExpensesTable;