const ExpensesForm = ({modalOff}) => {
    return ( 
        <div className="flex flex-col inset-0 fixed bg-primary bg-opacity-10 items-center justify-center gap-y-4">
            <div className="flex flex-col items-center justify-center gap-y-4 bg-white md:p-5 p-3 rounded-lg shadow-lg">
                <div className="flex">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default ExpensesForm;