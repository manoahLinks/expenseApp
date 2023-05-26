import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../components/Loading";
import { useLogin } from "../hooks/useLogin";
import AlertBox from "../components/AlertBox";

const LoginPage = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {login, isLoading,error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return ( 
        <div className="grid grid-cols-1 bg-gradient-to-r from-orange-500 to-orange-300 items-center fixed inset-0">
            {/* <div className="flex flex-col">
                <img className="" src={require(`../assets/Design inspiration-pana.png`)} alt="login img" />
            </div> */}
            <div className="flex flex-col bg-white  p-5 m-2 gap-y-4 md:w-4/12 md:mx-auto shadow-lg rounded-md">
                <h4 className="text-orange-500 font-semibold text-xl">LOGIN</h4>
                {error && <div className="flex p-2 border border-error items-center gap-x-2 bg-error text-red-500 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                    <h4>{error}</h4>
                </div>}
                <h4 className="font-light">Hi dear Employee, its great to have you around. join and get things done.</h4>
                <form className="grid grid-cols-1 gap-y-3" onSubmit={handleSubmit}>
                    
                    <input 
                        type="email"
                        placeholder="enter valid email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className={`border-slate-300 rounded-lg text-xs`}
                        value={email} 
                    />
                    {!email && <small className="text-red-400">*field required</small> }

                    <input 
                        type="password"
                        placeholder="enter password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className={`${!password && `border-red-200`} border-green-200 rounded-lg`}
                        value={password} 
                    />

                    <Link to={`/forgotpassword`} className="text-primary text-right">forgot password ?</Link>
                    <button className="flex rounded p-2 justify-center items-center bg-gradient-to-l from-orange-300 to-orange-500 hover:bg-opacity-50 text-white mt-5 font-semibold">
                        <h4 className="text-sm">Login</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
                <Link to={`/signup`}>dont have an account? signup</Link>
            </div>
            {isLoading && <LoadingPage />}
        </div>
     );
}
 
export default LoginPage;