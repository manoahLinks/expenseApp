import { useState, useEffect } from "react"
import { useDataContext } from "../../hooks/useDataContext"
import { useAuthContext } from "../../hooks/useAuthContext"
import ExpensesTable from "./compenents/ExpensesTable"

const ExpensesList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://smartwork-api.onrender.com/api/expense`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
                setIsLoading(false)
            }    
        }
        if(user){
            fetchData()
        }
        

    }, [dispatch, data, user])

    const disbursedExpenses = data.filter((expense)=>{
        return expense.isDisbursed == true
    })

    return ( 
        <div className="grid md:grid-cols-3 grid-cols-1 ">
            <div className="md:col-span-2">
                <div className="grid grid-cols-3 bg-slate-300 m-2 p-2 text-center">
                    <h4 className="cursor-pointer hover:bg-slate-100">Recent Request</h4>
                    <h4 className="cursor-pointer">Awaiting Approval</h4>
                    <h4 className="cursor-pointer">Disbursed</h4>
                </div>
                <div>
                    {data ? <ExpensesTable expenses={data} /> : <h4>Loading ...</h4>}
                    {disbursedExpenses ? <ExpensesTable expenses={disbursedExpenses} /> : <h4>Loading ...</h4>}
                </div>
                
            </div>
            <div className="flex border-r border">

            </div>
        </div>
     );
}
 
export default ExpensesList;