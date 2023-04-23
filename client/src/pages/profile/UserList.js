import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import UserTable from './components/UserTable'
import AssignRole from "./AssignRole";
    
const UserList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/user`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`   
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload:json})
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, data, user])

    const inActiveStaff = () => {
        const b = data.filter((a)=>{
            return a.isActive != true
        })

        console.log(b)
        return b.length
    }

    const activeStaff = () => {
        const b = data.filter((a)=>{
            return a.isActive === true
        })

        console.log(b)
        return b.length
    }

    return ( 
        <div className="grid grid-cols-3">
            <div className="grid grid-cols-1 col-span-2 gap-y-4 p-3">
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="flex flex-col gap-y-4 p-2 border rounded-lg">
                        <h4>TOTAL STAFF</h4>
                        {data && <h4>{data.length}</h4>}
                    </div>
                    <div className="flex flex-col gap-y-4 p-2 border rounded-lg">
                        <h4>ACTIVE USERS</h4>
                        {data && <h4>{activeStaff()}</h4>}
                    </div>
                    <div className="flex flex-col gap-y-4 p-2 border rounded-lg">
                        <h4>INACTIVE USERS</h4>
                        {data && <h4>{inActiveStaff()}</h4>}
                    </div>
                </div>
                {data && <UserTable users={data}/>}
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 md:p-5 p-2">
                    <div className="flex flex-col gap-y-1 ">
                        <h4>Permissions</h4>
                        <small>Grant persmissions to users</small>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
                <hr />
                
            </div>
        </div>
    );
}
     
    export default UserList;