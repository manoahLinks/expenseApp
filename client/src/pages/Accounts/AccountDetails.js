const AccountDetails = ({account, modalOff}) => {
    return ( 
        <div className="grid grid-cols-1 items-center justify-items-center justify-center fixed inset-0 bg-primary bg-opacity-10">
            <div className="flex flex-col md:w-4/12 w-full gap-y-4 rounded-lg shadow-lg bg-white p-3 md:p-5">
                <div className="grid grid-cols-3  border-b p-2">
                    <div className="flex rounded-full" onClick={modalOff}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  strokeWidth={2.5} fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 hover:bg-slate-200 cursor-pointer rounded-full">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </div>
                    <h4 className="text-sm font-semibold col-span-2">Account Details</h4>
                </div>
                <h4>id: <small>{account._id}</small></h4>
            </div>
        </div>
     );
}
 
export default AccountDetails;