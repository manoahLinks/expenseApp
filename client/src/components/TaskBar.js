import { Link } from "react-router-dom"; 

const TaskBar = () => {
    return ( 
        <div className="bottom-4 fixed w-full md:hidden block rounded-md grid grid-cols-1">
            <div className="grid mx-3 shadow bg-slate-50 rounded-md grid-cols-4 p-3">
                <Link to={'/home'} className="flex flex-col items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <small>Home</small>
                </Link>
            </div>
        </div>
     );
}
 
export default TaskBar;
