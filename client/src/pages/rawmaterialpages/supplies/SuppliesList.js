import { useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useDataContext } from "../../../hooks/useDataContext";
import SuppliesTable from "./SuppliesTable";

const SuppliesList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/rawmaterial-transaction/`, {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            response.ok ? dispatch({type:'SET_DATA', payload: json}) : console.log('error')
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
        <div className="grid grid-cols-1 gap-y-4 bg-white md:p-5">
            <div className="grid grid-cols-3 gap-x-2">
                <div className="flex flex-col p-2 border rounded-lg">
                    <h4>Total Transactions</h4>
                    {data && <h4>count :{data.length}</h4>}
                    {data && <h4>Worth: N{totalTransactions()}</h4>}
                </div>
                <div className="flex flex-col p-2 border rounded-lg">
                    <h4>Worth of Purchase</h4>
                    {data && <h4>WORTH: N{totalSupplies()}</h4>}
                </div>
                <div className="flex flex-col p-2 border rounded-lg">
                    <h4>Worth of usage</h4>
                    {data && <h4>worth: N{totalUsage()}</h4>}
                </div>
            </div>
            {data && <SuppliesTable supplies={data} />}
        </div>
     );
}
 
export default SuppliesList;