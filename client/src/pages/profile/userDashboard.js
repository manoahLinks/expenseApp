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
        <div className="grid grid-cols-1">
            <div className="border w-9/12 mx-auto md:p-5 grid md:grid-cols-2 grid-cols-1">
                <img src="" alt="profile pic" />
                <div className="grid grid-cols-2">
                    <h4>Email</h4>
                    <h4>{data.email}</h4>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;