import { useState } from "react";
import { Link } from "react-router-dom";
import AlertBox from "../components/AlertBox";
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
        <div className="grid grid-cols-1 justify-center items-center bg-pruple-200">
            <div className="flex flex-col p-5 m-2 gap-y-4 rounded-md bg-purple-50">
                <h4 className="text-purple-800 font-semibold text-xl">SIGN UP</h4>
                <form className="grid grid-cols-1 gap-y-3" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="enter valid email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className={`border-none rounded-lg`}
                        value={email} 
                    />

                    <input 
                        type="password"
                        placeholder="enter password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className={`border-none rounded-lg`}
                        value={password} 
                    />

                    <input 
                        type="password"
                        placeholder="confirm password"
                        className={`border-none rounded-lg`} 
                    />

                    <Link to={`/passwordRecovery`} className="text-blue-900 text-right">forgot password ?</Link>
                    <button className="flex w-4/12 rounded-full p-2 justify-center items-center bg-purple-800 text-white mt-5 font-semibold">
                        <h4 className="text-sm">Login</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
            {isLoading && <LoadingPage />}
            {error && <AlertBox message={`unable to register user`}/>}
        </div>
     );
}
 
export default SignupPage;