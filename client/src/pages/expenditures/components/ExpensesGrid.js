const ExpensesGrid = ({expenses}) => {
    return ( 
        <div className="grid grid-cols-1 gap-y-1">
            {expenses && expenses.map((expense)=>(
                <div className="flex items-center justify-between border-b p-2 bg-white">
                    <div className={`p-1 rounded-full ${expense.isDisbursed ? `bg-green-200`: `bg-amber-200`}`}>
                        {expense.isDisbursed ? <h4>D</h4> : <h4>A</h4>}
                    </div>

                    <h4>{expense.amount}</h4>
                </div>
            ))}
            
        </div>
     );
}
 
export default ExpensesGrid;