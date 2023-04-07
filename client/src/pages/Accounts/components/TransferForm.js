import useFetch from "../../../hooks/useFetch";

const TransferForm = ({modalOff}) => {

    const {data} = useFetch(`http://localhost:5500/api/account`)

    return ( 
        <div className="grid grid-cols-1 inset-0 fixed items-center justify-items-center justify-center bg-primary bg-opacity-10">
            <div className='flex flex-col md:w-4/12 w-full gap-y-4 rounded-lg bg-white md:p-5 p-2'>
                <div className={`flex flex-row-reverse items-center justify-between`}>
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 cursor-pointer text-red-500">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className='font-semibold'>Fund Account</h4>
                </div>

                <form className='grid grid-cols-1 gap-y-2'>
                    <label>Beneficiary Acct</label>
                    <select className="w-full border-slate-300">
                        <option value="">select beneficiary</option>
                        {data && data.map((account)=>(
                            <option key={account._id} value={account._id}>{account.name}</option>
                        ))}
                    </select>
                    <label>Amount</label>
                    <input 
                        type="number"
                        className='w-full border-slate-300' 
                    />
                    <div className='grid grid-cols-1 gap-y-2'>
                        <h4 className='p-2 rounded-md bg-slate-50'>Enter your pin to proceed</h4>
                        <input 
                            type="Number"
                            className='border-slate-200 w-full' 
                        />
                    </div>
                   
                    <div className='flex justify-between'>
                        <button className='py-1 px-2 text-white rounded-md bg-gradient-to-r from-cyan-400 to-blue-300'>Proceed</button>
                    </div>
                </form>
            </div>

           
        </div>
     );
}
 
export default TransferForm;