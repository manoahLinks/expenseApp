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
                <button className="bg-orange-300 text-white px-2 py-1 m-auto rounded-lg">new user</button>
            </div>
        </div>
     );
}
 
export default UserDashboard;