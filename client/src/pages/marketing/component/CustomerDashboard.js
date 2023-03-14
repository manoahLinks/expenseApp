import { useState, useEffect } from "react";
import { useDataContext } from "../../../hooks/useDataContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import CustomerForm from "../CustomerForm";

const CustomerDashboard = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [customerForm, setCustomerForm] = useState(false)
    const [orderForm, setOrderForm] = useState(false)

    const modalOff = () =>{
        setCustomerForm(false)
    }


    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/customer`, {
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
        }
        
    }, [dispatch, data, user])

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-y-4 md:gap-y-0">
            <div className="flex flex-col col-span-2 md:p-5">
                <div className="grid md:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-0 grid-cols-2 col-span-2">
                    <div className="md:p-5 p-3 shadow-md bg-white flex flex-col gap-y-6 rounded-lg">
                        <div className="flex justify-between">
                            <h4>Registered customers</h4>
                        </div>
                        <h4 className="text-xl">75</h4>
                        <div onClick={()=>{setCustomerForm(true)}}>
                            <button className="p-1 rounded border text-xs bg-slate-100 border-slate-300 shadow-md">new customer</button>
                        </div>
                    </div>

                    <div className="md:p-5 p-3 shadow-md bg-white flex flex-col gap-y-6 rounded-lg">
                        <div className="flex justify-between">
                            <h4>Orders sent</h4>
                        </div>
                        <h4 className="text-xl">75</h4>
                        <div onClick={()=>{setCustomerForm(true)}}>
                            <button className="p-1 rounded border text-xs bg-slate-100 border-slate-300 shadow-md">send new order</button>
                        </div>
                    </div>

                    <div className="md:p-5 p-3 shadow-md bg-white flex flex-col gap-y-6 rounded-lg">
                        <div className="flex justify-between">
                            <h4>Active Routes</h4>
                        </div>
                        <h4 className="text-xl">80 +</h4>
                        <div onClick={()=>{setCustomerForm(true)}}>
                            <button className="p-1 rounded border text-xs bg-slate-100 border-slate-300 shadow-md">new customer</button>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="flex flex-col md:p-5">
                <div className="flex flex-col bg-white p-2 rounded-lg gap-y-2 shadow-md text-xs">
                    <div className="relative flex items-center justify-end">
                        <input 
                            type="text"
                            className="text-xs w-full rounded-md border-none"
                            placeholder="search"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute mr-2">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr />
                    <div className="grid grid-cols-1 gapy-y-2">
                        {data && data.map((customer)=>(
                            <div key={customer._id} className="flex items-center hover:bg-slate-400 hover:bg-opacity-10 p-2 rounded ">
                                <img className="w-10 h-10 rounded" src={require(`../../../assets/icons8-user-male-100.png`)} alt="" />
                                <div className="grid grid-cols-2">
                                    <h4 className="col-span-2">{customer.name}</h4>
                                    <small>+234{customer.phone}</small>
                                    <small className="text-blue-600">{customer.address}</small>
                                </div>
                            </div>
                        ))}   
                    </div>
                     
                </div>
            </div>
            {customerForm && <CustomerForm modalOff={modalOff} />}
        </div>
     );
}
 
export default CustomerDashboard;