import { useState, useEffect } from "react"
import { useDataContext } from "../../hooks/useDataContext"
import { useAuthContext } from "../../hooks/useAuthContext"
import ExpensesTable from "./compenents/ExpensesTable"

const ExpensesList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/expense`, {
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

    return ( 
        <div className="grid md:grid-cols-3 grid-cols-1 ">
            <div className="md:col-span-2">
                {data ? <ExpensesTable expenses={data} /> : <h4>Loading ...</h4>}
            </div>
            <div className="flex border-r border">

            </div>
        </div>
     );
}
 
export default ExpensesList;