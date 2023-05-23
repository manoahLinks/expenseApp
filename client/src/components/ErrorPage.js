
const ErrorPage = () => {
    
    const handleReload = () => {
        window.location.reload()
    }
    
    return ( 
        <div className="flex flex-col flex-1 items-center justify-center justify-items-center">
            <h4 className='font-semibold text-lg'>An unexpected error has occurred !</h4>
            <div className="flex flex-1 w-72">
                <img src={require(`../assets/Design community-amico.png`)} alt="" />
            </div>
            
            <button onClick={handleReload} className='bg-blue-500 p-2 flex gap-x-4 rounded-md text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                <h4>Back home</h4>
            </button>
        </div>
     );
}
 
export default ErrorPage;