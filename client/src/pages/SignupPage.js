import { useState } from "react";
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
            <div className="flex flex-col p-5 m-2 gap-y-4 rounded-md bg-gray-200">
                <h4 className="text-purple-800 font-semibold text-xl">SIGN UP</h4>
                <form className="grid grid-cols-1 gap-y-2" onSubmit={handleSubmit}>
                
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


                    <button className="p-2 bg-purple-800 text-white mt-5 font-semibold">Sign up</button>
                </form>
            </div>
            {isLoading && <LoadingPage />}
            {error && <AlertBox message={`unable to register user`}/>}
        </div>
     );
}
 
export default SignupPage;