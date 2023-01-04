import React, {useState} from "react";
import LoadingPage from "../components/Loading";
import { Navigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let user = {email, password}

        const response = await fetch(`https://expesetracker.herokuapp.com/api/user`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        setIsPending(true)

        if(!response.ok){
            setError(true)
            setMessage('invalid login credentials please check and try again')
            setIsPending(false)
            console.log('unable to login user')
        }
        if(response.ok){
            setIsPending(false)
            setError(false)
            setEmail('')
            setPassword('')
            setSuccess(true)
            console.log('user successfully logged in')
        }

    }

    return ( 
        <div className="flex flex-col h-screen bg-cover bg-center" id="image">
            {success && ( <Navigate to={`/home`} replace={true}></Navigate> )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4 mt-32 rounded-lg bg-opacity-90 p-5 bg-purple-50 text-gray-500 shadow-md rounded-lg">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold">Hello</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </div>
                <h4 className="font-light">Please login to your account</h4>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="username" className="text-sm font-semibold">Username</label>
                    <input 
                        type="email"
                        className="w-full text-sm opacity-50"
                        id="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                    />
                </div>

                <div className="flex flex-col gap-y-1">
                    <label htmlFor="" className="font-semibold text-sm">Password</label>
                    <input 
                        type="password"
                        className="w-full text-sm opacity-50"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password} 
                    />
                </div>
                <h4 className="text-right">forgot password ?</h4>
                <button className="text-sm p-2 bg-gradient-to-b from-purple-900 to-purple-500 text-purple-200 font-semibold self-center border-2 border-purple-100 shadow rounded-lg mt-2">Login</button>
                <Link to={`/`}>i don't have an account? signup</Link>
            </form>
            {isPending && <LoadingPage></LoadingPage>}
            {error && <AlertBox message={message}></AlertBox>}
        </div>
     );
}
 
export default LoginPage;