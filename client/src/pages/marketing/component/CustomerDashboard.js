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
                <div className="grid md:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-0 grid-cols-3 col-span-2">
                    <div className="md:p-5 p-3 border border-slate-100 hover:border-none hover:shadow-md bg-white flex flex-col gap-y-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <div className="flex justify-between">
                            <h4>Registered customers</h4>
                        </div>
                        <h4 className="text-xl">75</h4>
                        
                    </div>

                    <div className="md:p-5 p-3 border border-slate-100 hover:border-none hover:shadow-md bg-white flex flex-col gap-y-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6 -rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        <div className="flex justify-between">
                            <h4>Orders sent</h4>
                        </div>
                        <h4 className="text-xl font-semibold">75</h4>
                    </div>

                    <div className="md:p-5 p-3 border border-slate-100 hover:border-none hover:shadow-md bg-white flex flex-col gap-y-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div className="flex justify-between">
                            <h4>Active Routes</h4>
                        </div>
                        <h4 className="text-xl">80 +</h4>
                        
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