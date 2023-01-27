import React, {useState, useEffect} from "react";
import ExpenseDetails from "./ExpenseDetails";
import LoadingPage from "./Loading";
import AlertBox from "./AlertBox";
import {useDataContext} from '../hooks/useDataContext'
import { useAuthContext } from "../hooks/useAuthContext";

const Modal = ({setModalOn, expense}) => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/expense/${expense}`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }    
        }
        if(user){
            fetchData()
            setIsPending(false)
        }
        
    }, [dispatch, user])

    const handleCancelClick = () =>{
        setModalOn(false)
    }

    return ( 
         <div className={`${isPending && 'hidden'} flex flex-col inset-0 bg-opacity-50 items-center justify-center h-screen bg-purple-50 fixed`}>
            <div className="flex flex-col w-11/12 rounded-md p-2 border bg-white">
                <div className="flex justify-between border-b px-2 py-3">
                    <h4 className="text-sm text-purple-900 self-center font-semibold">Expense summary :</h4>
                    <span className="p-1 rounded-full bg-purple-900" onClick={handleCancelClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={4} stroke="currentColor" className="w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
                {data && <ExpenseDetails result={data} cancelClick={handleCancelClick} />}
            </div>
            {isPending && <LoadingPage></LoadingPage>}
            {error && <AlertBox message={`failed to find resource check your internet connection`}></AlertBox>}
        </div>
     );
}
 
export default Modal;