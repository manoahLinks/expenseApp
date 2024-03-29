import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../components/Loading";
import { useSignup } from "../hooks/useSignup";

const SignupPage = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {signup, isLoading,error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return ( 
        <div className="grid grid-cols-1 bg-gradient-to-r from-orange-500 to-orange-300 items-center fixed inset-0">
            {/* <div className="flex flex-col">
                <img src={require(`../assets/Design inspiration-bro.png`)} alt="login img" />
            </div>   */}
            <div className="flex flex-col border border-slate-200 p-5 m-2 gap-y-4 bg-white md:w-4/12 md:mx-auto shadow-lg rounded-md">
                <h4 className="text-orange-500 font-semibold text-xl">SIGN UP</h4>
                {error && <div className="flex p-2 border border-red-500 items-center gap-x-2 bg-red-100 text-red-500 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                    <h4>{error}</h4>
                </div>}
                <form className="grid grid-cols-1 gap-y-3" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="enter valid email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className={`border-slate-300 rounded-lg`}
                        value={email} 
                    />

                    <input 
                        type="password"
                        placeholder="enter password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className={`border-slate-300 rounded-lg`}
                        value={password} 
                    />

                    <input 
                        type="password"
                        placeholder="confirm password"
                        className={`border-slate-300 rounded-lg`} 
                    />

                    <Link to={`/forgotpassword`} className="text-blue-900 text-right">forgot password ?</Link>
                    <button className="flex rounded p-2 justify-center items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white mt-5 font-semibold">
                        <h4 className="text-sm">Sign up</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
                <Link to={`/`}>Already have an account? login</Link>
            </div>
            {isLoading && <LoadingPage />}
        </div>
     );
}
 
export default SignupPage;