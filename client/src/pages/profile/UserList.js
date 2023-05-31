import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
import UserTable from './components/UserTable'
import AssignRole from "./AssignRole";
import UserGrid from "./components/UserGrid";
import LoadingPage from "../../components/Loading";
import UserDetails from "./components/UserDetails"
import UserUpdateForm from "./components/UserUpdateForm";
    
const UserList = () => {

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`https://smartwork-api.onrender.com/api/user`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`   
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload:json})
                setIsLoading(false)
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, data, user])

    const [editForm, setEditForm] = useState(false)

    const modalOn = async (data) => {
        
        const response = await fetch(`https://smartwork-api.onrender.com/api/user/${data._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            setSelectedUser({...data ,json})
        }
    }

    const modalOff = () => {
        setSelectedUser(false)
    }

    const updateModal = () =>{
        setEditForm(true)
    }

    const closeUpdateModal =() => {
        setEditForm(false)
    }

    const inActiveStaff = () => {
        const b = data.filter((a)=>{
            return a.isActive != true
        })
        return b.length
    }

    const activeStaff = () => {
        const b = data.filter((a)=>{
            return a.isActive === true
        })

        return b.length
    }

    return ( 
        <div className="grid md:grid-cols-3 grid-cols-1 bg-slate-50">
            <div className="grid grid-cols-1 md:col-span-2 gap-y-4 md:gap-y-8 p-3">
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="flex flex-col p-2 md:p-5 bg-green-500 bg-opacity-20 shadow md:gap-y-4 gap-y-2 border rounded-lg">
                        <div className="flex items-center justify-between">
                            <small className="uppercase font-semibold">TOTAL STAFF</small>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                            </svg>
                        </div>
                        {data && <h4 className="text-[30px] text-end font-semibold text-slate-600">{data.length}</h4>}
                    </div>
                    <div className="flex flex-col p-2 md:p-5 bg-white shadow md:gap-y-4 gap-y-2 border rounded-lg">
                        <div className="flex items-center">
                            <small className="uppercase font-semibold">ACTIVE USERS</small>
                        </div>
                        {data && <h4 className="text-[30px] font-semibold text-green-400">{activeStaff()}</h4>}
                    </div>
                    <div className="flex flex-col p-2 md:p-5 bg-white shadow md:gap-y-4 gap-y-2 border rounded-lg">
                        <div className="flex items-center">
                            <small className="uppercase font-semibold">INACTIVE USERS</small>
                        </div>
                        {data && <h4 className="text-[30px] font-semibold text-red-400">{inActiveStaff()}</h4>}
                    </div>
                </div>
                {data && <UserTable users={data} modalOn={modalOn} updateModal={updateModal} />}
                {data && <UserGrid users={data} modalOn={modalOn} />}
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
            {isLoading && <LoadingPage/>}
            {selectedUser && <UserDetails user={selectedUser} modalOff={modalOff} setEditForm={updateModal} />}
            {editForm && <UserUpdateForm modalOff={closeUpdateModal} />}
        </div>
    );
}
     
    export default UserList;