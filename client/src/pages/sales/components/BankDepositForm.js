import useFetch from "../../../useFetch";

const BankDepositForm = ({modalOff}) => {
    return ( 
        <div className="grid grid-cols-1 fixed inset-0 bg-primary bg-opacity-10 items-center justify-center justify-items-center">
            <div className="flex flex-col md:p-5 p-2 bg-white shadow-lg gap-y-4 rounded-md md:w-4/12 w-full">
                <div className="flex items-center justify-start">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className="self-center">Deposit form</h4>
                </div>
                <hr />
                <form className="grid grid-cols-1 gap-y-2">
                    <select name="" id="">
                        <option value="">select bank</option>
                        {}
                    </select>
                    <input 
                        type="text"
                        className="border-none bg-slate-50 text-xs placeholder-blue-400"
                        placeholder="transaction id"
                    />
                    <input 
                        type="number"
                        className="border-none bg-slate-50 text-xs placeholder-blue-400"
                        placeholder="amount"
                    />
                </form>
                <hr />
                <div className="grid grid-cols-2">
                    <button onClick={modalOff} className="p-2 border-r hover:bg-slate-100">cancel</button>
                    <button className="p-2">Proceed</button>
                </div>
            </div>
        </div>
     );
}
 
export default BankDepositForm;