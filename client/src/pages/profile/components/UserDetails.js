const UserDetails = ({user, modalOff}) => {
    
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-1 items-center justify-items-center fixed inset-0 bg-primary bg-opacity-20">
            <div className="flex flex-col gap-y-4 p-5 mt-10 md:w-3/12 w-full shadow-lg rounded-lg bg-white">
                
                <div className="flex justify-between">
                    <h4 className="font-semibold">Profile details</h4>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr />

                <div className="flex flex-col items-center gap-y-1 md:gap-y-2">
                    <img className="rounded-full bg-orange-300" src={require(`../../../assets/icons8-user-male-100.png`)} alt="proimg" />
                    <h4>{user.email}</h4>
                    <small>{user.role}</small>
                    <h4>Employee Id: {user._id}</h4>
                </div>
                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">
                    <div className="flex justify-between">
                        <h4>phone:</h4>
                        <h4>080234</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Email:</h4>
                        <h4>{user.email}</h4>
                    </div>
                </div>
                <hr />

                <div className="flex flex-col gap-y-1 md:gap-y-2">
                    <div className="flex justify-between">
                        <h4>Start Date:</h4>
                        <h4>{user.createdAt}</h4>
                    </div>

                    <div className="flex justify-between">
                        <h4>Device Address</h4>
                        <h4>{user.ipAddress}</h4>
                    </div>
                </div>

                <button className="bg-orange-400 text-white p-2 cursor-pointer rounded-md font-semibold">View full details</button>
            </div>
        </div>
     );
}
 
export default UserDetails;