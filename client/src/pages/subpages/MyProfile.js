import { Link } from "react-router-dom";

const MyProfile = () => {
    return ( 
        <div className="flex flex-col justify-evenly p-2 gap-y-4">
            <h4 className="text-xl text-center font-light p-5">My Profile</h4>
            <div className="grid grid-cols-1 gap-y-6 items-center">
               <div className="flex gap-x-4 items-center shadow rounded p-2 bg-gray-50 hover:bg-green-100">
                    {<img className="-mt-5" src={require(`../../assets/icons8-control-panel-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">View my dashboard</h4>
               </div>
               <Link to={`/myprofile/attendance`} className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-checked-checkbox-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Attendance</h4>
               </Link>
               <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-business-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">My Job description</h4>
               </div>
               <div className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-6" src={require(`../../assets/icons8-gmail-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Invite New employee</h4>
               </div>
            </div>
        </div>
     );
}
 
export default MyProfile;