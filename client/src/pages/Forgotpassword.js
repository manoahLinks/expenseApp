import { Link } from "react-router-dom";

const Forgotpassword = () => {
    return ( 
        <div className="grid grid-cols-1 bg-gradient-to-r from-orange-500 to-orange-500 items-center fixed inset-0">
            {/* <div className="flex flex-col">
                <img src={require(`../assets/Login-amico.png`)} alt="login img" />
            </div> */}
            <div className="flex flex-col border border-slate-200 p-5 m-2 gap-y-4 bg-white md:w-4/12 md:mx-auto shadow-lg rounded-md">
                <h4 className="text-orange-500 font-semibold">Password recovery</h4>
                <form className="grid grid-cols-1 gap-y-4">
                    <label >Email</label>
                    <input 
                        type="email"
                        className="border-slate-300 rounded-md"
                        placeholder="enter valid email address" 
                    />
                    <button className="bg-gradient-to-r from-orange-500 to-orange-300 p-2 mt-5 rounded text-white font-bold">send recovery email</button>
                </form>
                <Link to={`/`}>Back to login</Link>
            </div>
        </div>
     );
}
 
export default Forgotpassword;