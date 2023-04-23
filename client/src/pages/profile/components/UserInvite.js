const UserInvite = () => {
    return ( 
        <div className="flex flex-col inset-0 fixed items-center justify-center bg-opacity-20 bg-primary justify-items-center">
            <div className="flex flex-col md:p-5 gap-y-4 p-2 md:w-4/12 w-full bg-white rounded-lg">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                    </svg>
                </div>
                <form className="grid grid-cols-1 md:gap-y-4 gap-y-2">
                    <input 
                        type="email"
                        className="text-xs" 
                    />
                    <div className="flex mt-6">
                        <button className="border text-white rounded-md bg-gray-900 p-1">Send invite</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default UserInvite;