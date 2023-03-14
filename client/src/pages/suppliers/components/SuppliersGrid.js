const SuppliersGrid = () => {
    return ( 
        <div className="flex flex-col md:p-5 p-2 gap-y-2 text-xs">
            <small className="uppercase text-center font-semibold text-slate-900">suppliers</small>
            <hr />
            <div className="flex items-center">
                <div className="flex rounded-full p-1 bg-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 fill-white`}>
                         <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
                         <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                </div>
                
                <h4>Muabsa</h4>

                
            </div>
        </div>
     );
}
 
export default SuppliersGrid;