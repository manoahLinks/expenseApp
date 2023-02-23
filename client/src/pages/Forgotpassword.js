const Forgotpassword = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen justify-center items-center bg-white">
            <div className="flex flex-col">
                <img src={require(`../assets/Login-amico.png`)} alt="login img" />
            </div>
            <div className="flex flex-col p-5 m-2 gap-y-4 rounded-md">
                <h4 className="text-primary">Password recovery</h4>
                <form className="grid grid-cols-1 gap-y-4">
                    <label >Email</label>
                    <input 
                        type="email"
                        className="border-slate-300" 
                    />
                    <button className="bg-primary p-2 mt-5 rounded text-white font-bold">send recovery email</button>
                </form>
            </div>
        </div>
     );
}
 
export default Forgotpassword;