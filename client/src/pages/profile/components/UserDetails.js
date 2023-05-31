import format from "date-fns/format";


const UserDetails = ({user, modalOff, setEditForm}) => {
    
    return ( 
        <div className="grid grid-cols-1 overflow-y-scroll md:grid-cols-1 items-center justify-items-center fixed inset-0 bg-primary bg-opacity-20">
            <div className="flex flex-col gap-y-4 p-5 my-16 md:w-3/12 w-full shadow-lg rounded-lg bg-white">
                
                <div className="flex justify-between">
                    <h4 className="font-semibold">Profile details</h4>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr />

                <div className="flex flex-col items-center gap-y-1 md:gap-y-2">
                    <img className="rounded-full bg-orange-300" src={require(`../../../assets/icons8-user-male-100.png`)} alt="proimg" />
                    <svg onClick={()=>{setEditForm()}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <h4>{user.email || `nill`}</h4>
                    <small>{user.role || `nill`}</small>
                    <h4>Employee Id: {user._id || `nill`}</h4>

                </div>

                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">

                    <div className="flex justify-between">
                        <h4>Name</h4>
                        <h4>{user.name || `nill`}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>phone:</h4>
                        <h4>{user.phone || `nill`}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Email:</h4>
                        <h4>{user.email || `nill`}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Home Address:</h4>
                        <h4>{user.homeAddress || `nill`}</h4>
                    </div>
                </div>
                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">
                    <div className="flex justify-between">
                        <h4>Last updated:</h4>
                        <h4 className="text-blue-400" >{format(new Date(user.updatedAt) , 'dd MMM yyyy') || `nill`}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Device Address</h4>
                        <h4>{user.ipAddress || `nill`}</h4>
                    </div>
                </div>

                <button className="bg-orange-400 text-white p-2 cursor-pointer rounded-md font-semibold">View full details</button>
            </div>
        </div>
     );
}
 
export default UserDetails;