const LoginPage = () => {
    return ( 
        <div className="grid grid-cols-1">
            <div>

            </div>
            <form className="flex flex-col gap-y-4 m-5 p-5 bg-purple-50 text-purple-900 shadow-md rounded-lg">
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="username" className="text-sm font-semibold">Username</label>
                    <input 
                        type="text"
                        className="w-full inset bg-purple-100 rounded-full text-sm"
                        id="username" 
                    />
                </div>

                <div className="flex flex-col gap-y-1">
                    <label htmlFor="" className="font-semibold text-sm">Password</label>
                    <input 
                        type="password"
                        className="w-full inset bg-purple-100 rounded-full text-sm" 
                    />
                </div>
                <button className="text-sm px-6 py-2 text-purple-900 font-semibold self-center border-2 border-purple-100 shadow rounded-full mt-2">Login</button>
               
            </form>
        </div>
     );
}
 
export default LoginPage;