import { useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";

const CustomerList = () => {

    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://expesetracker.herokuapp.com/api/customer`, {
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
        
    }, [dispatch, user])

    return ( 
        <div className="grid grid-cols-1 gap-y-2">
            {data && data.map((customer)=>(
                <div className="m-2 p-2 flex justify-between items-center shadow bg-gray-100">
                    <div className="flex rounded-full p-2 bg-white">
                        <img className="h-10 w-10 rounded-full" src={require(`../../assets/icons8-male-user-48.png`)} alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-1 items-center">
                        <h4 className="text-sm font-semibold">{customer.name}</h4>
                        <h4 className="font-light">{customer.phone}</h4>
                    </div>
                    <div className="flex p-2 rounded-full bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                </div>
            ))}
            
        </div>
     );
}
 
export default CustomerList;