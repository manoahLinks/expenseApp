import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpensesList from "../expenditures/ExpensesList";
import ExpensesForm from "../expenditures/ExpensesForm";


const Expenditures = () => {

        const [currentSection, setCurrentSection] = useState(1)
        const [activeTab, setActiveTab] = useState(1)

        const [expenseForm, setExpenseForm] = useState(false)

        const handleClick = (section) => {
                setCurrentSection(section)
                setActiveTab(section)
        }

        const modalOff = () => {
            setExpenseForm(false)
        }

    return ( 
        <div className="flex flex-col">
            <div className="flex flex-col md:gap-y-4 gap-y-2 md:p-5 p-2">
                <div className="flex justify-between">
                    <div className='flex items-center overflow-x-scroll md:overflow-x-hidden'>
                        <Link to={`/home`} className="flex p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <h4 className="text-lg font-bold">Expenditures</h4>
                    </div>
                    <div className="flex">
                        <span onClick={()=>{setExpenseForm(true)}} className="cursor-pointer flex bg-orange-300 whitespace-nowrap text-orange-900 font-semibold items-center gap-x-2 p-1 text-white rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <small>create an expense</small>
                        </span>
                    </div>
                </div>
            </div>
            
            <hr />
            <div className="bg-slate-50">

                {currentSection === 1 && (
                    <ExpensesList/>
                )}

                
            </div>
            {expenseForm && <ExpensesForm modalOff={modalOff}/> }
        </div>
     );
}
 
export default Expenditures;