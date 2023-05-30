const UserGrid = ({users, modalOn}) => {
    return ( 
        <div className="block md:hidden grid grid-cols-1 shadow gap-y-2 rounded-lg bg-white">
            {users && users.map((user)=> (
                <div onClick={()=>{modalOn(user)}} className="flex items-center p-2 rounded-md border-b">
                    <h4>{user.email}</h4>
                    <small className="p-1 bg-amber-100 rounded-md text-amber-500">{user.role}</small>
                </div>
            ))}
        </div>
     );
}
 
export default UserGrid;