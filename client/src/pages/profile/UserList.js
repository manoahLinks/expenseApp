import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";
    
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

    return ( 
        <div className="grid grid-cols-1">

            <div className="grid grid-cols-2">
                <div className="grid grid-cols-3">

                </div>

                <div className="grid grid-cols-3">
                    {data && data.map((profile)=>(
                        <h4>{profile.name}</h4>
                    ))}
                </div>
            </div>
        </div>
        );
    }
     
    export default UserList;