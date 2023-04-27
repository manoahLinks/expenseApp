import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import SuppliesTable from "./SuppliesTable";
import LoadingPage from "../../../components/Loading";
import { useLogout } from "../../../hooks/useLogout";

const SuppliesList = () => {

    const {logOut} = useLogout()
    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{

        if(user.decodedToken.exp < Date.now() / 1000){
            logOut()
        }

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/rawmaterial-transaction/`, {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(!response.ok){

            }
            
            if(response.ok){
                dispatch({type:'SET_DATA', payload: json})
                setIsLoading(false)
            }
        }

        user ? fetchData() : console.log('no user attached to request')

    }, [dispatch, data, user])

    const totalTransactions = () => {

        let totValue = 0
        for (let item of data) {
            totValue += item.amount
        }
        return totValue
    }

    const totalSupplies = () => {

        let totValue = 0
        let supplies = data.filter((a)=>{
            return a.type === 'purchase'
        })
        console.log(supplies)
        for (let item of supplies) {
            totValue += item.amount
        }
        return totValue
    }

    const totalUsage = () => {

        let totValue = 0
        let usages = data.filter((a)=>{
            return a.type === 'usage'
        })
        for (let item of usages) {
            totValue += item.amount
        }
        return totValue
    }


    return ( 
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-8 bg-white md:p-5 bg-slate-50">
            <div className="grid grid-cols-3 md:gap-x-8 gap-x-2">
                <div className="flex flex-col bg-white gap-y-4 md:p-5 p-2 shadow border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-bold">Total Transactions</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-400 font-bold">N{totalTransactions()}</h4>}
                    {data && <small>result: {data.length}</small>}
                </div>
                <div className="flex flex-col md:p-5 p-2 bg-white gap-y-4 shadow border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-bold">Worth of Purchase</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-400 font-bold">N {totalSupplies()}</h4>}
                </div>
                <div className="flex flex-col md:p-5 p-2 bg-white gap-y-4 shadow border rounded-lg">
                    <div className="flex items-center">
                        <small className="uppercase font-bold">Worth of usage</small>
                    </div>
                    {data && <h4 className="text-[30px] text-slate-400 font-bold">N {totalUsage()}</h4>}
                </div>
            </div>
            {data && <SuppliesTable supplies={data} />}
            {isLoading && <LoadingPage/>}
        </div>
     );
}
 
export default SuppliesList;