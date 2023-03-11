import { useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import SuppliesTable from "./SuppliesTable";

const SuppliesList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://expense-app-manoahlinks.vercel.app/api/rawmaterial-transaction/`, {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            response.ok ? dispatch({type:'SET_DATA', payload: json}) : console.log('error')
        }

        user ? fetchData() : console.log('no user attached to request')

    }, [dispatch, data, user])


    return ( 
        <div className="grid grid-cols-1 text-xs bg-white md:p-5 shadow rounded-md">
            {data && <SuppliesTable supplies={data} />}
        </div>
     );
}
 
export default SuppliesList;