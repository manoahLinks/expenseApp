import { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const UserDashboard = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`https://smartwork-api.onrender.com/api/user/${user.email}`, {
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
    }, [user, data, dispatch])

    return ( 
        <div className="flex flex-col justify-items-center">
            <div className="flex flex-col md:gap-y-4 gap-y-2 md:w-6/12 justify-items-center self-center">
                <div className="flex md:w-72 md:h-72 self-center">
                    <img className="object-fit" src={require(`../../assets/Design community-pana.png`)} alt="" />
                </div>
                <p className="text-center font-light">You can create and manage your employee's account here accounts here</p>
                <button className="flex gap-x-2 bg-orange-300 text-white px-2 py-1 m-auto rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <small>create payroll</small>
                </button>

                <button className="flex gap-x-2 border border-orange-300 text-orange-300 px-2 py-1 m-auto rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <small>Record attendance</small>
                </button>
            </div>
        </div>
     );
}
 
export default UserDashboard;