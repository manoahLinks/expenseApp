const Sidebar = () => {
    return ( 
        <div className='w-3/12 bg-primary bg-opacity-10 border-r fixed h-full grid grid-cols-1 hidden md:block'>
            <div className='flex flex-col p-5 items-center border-b'>
                
                <button className='p-1 bg-gray-100 rounded'>Edit profile</button>
            </div>
            <div className='border-b p-5 flex flex-col items-center'>      
            <div className='flex gap-x-2 items-center bg-gray-100 py-1 px-2'>
                <div className='flex p-1 bg-white rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 animate-spin">
                    <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                    </svg>
                </div>
                <h4>Staff Appriasal</h4>
            </div>
            <div className='flex'>
            
            </div>
            </div>
            <div className="grid grid-cols-1">
                
            </div>
        </div>
     );
}
 
export default Sidebar;