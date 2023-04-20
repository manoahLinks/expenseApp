const SupplierDetails = ({supplier, modalOff}) => {
    return ( 
        <div className="grid grid-cols-1 fixed items-center justify-center justify-items-center inset-0 bg-primary bg-opacity-10">
            <div className="flex flex-col md:w-4/12 w-full gap-y-4 bg-white shadow-lg rounded-lg p-3 md:p-5">
                <div className="grid grid-cols-1 text-green-700 p-2">
                    <div className="flex flex-row-reverse justify-between items-center">
                        <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  strokeWidth={2.5} fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 hover:text-red-500 cursor-pointer">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                        <h4 className="text-sm text-primary font-semibold col-span-2">Supplier Details</h4>
                    </div>  
                </div>
                <h4>id: <small>{supplier._id}</small></h4>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Name:</h4>
                        <h4>{supplier.name}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Email:</h4>
                        <h4>{supplier.email}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Phone:</h4>
                        <h4>+234{supplier.phone}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>location:</h4>
                        <h4>{supplier.location}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Total supplies:</h4>
                        <h4>N {supplier.totalSupplies}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='flex justify-between'>
                        <h4 className='text-slate-400'>Phone:</h4>
                        <h4>N {supplier.totalPayments}</h4>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SupplierDetails;