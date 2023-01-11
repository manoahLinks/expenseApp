const Marketing = () => {
    return ( 
        <div className="flex flex-col justify-evenly p-2 gap-y-4">
            <h4 className="text-xl text-center font-light p-5">Marketing</h4>
            <div className="grid grid-cols-1 gap-y-6 items-center">
               <div className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-add-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Register new customer</h4>
               </div>
               <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-deliver-food-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Order products</h4>
               </div>
               <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-reminders-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Set schedules</h4>
               </div>
               <div className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-6" src={require(`../../assets/icons8-people-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">My customers</h4>
               </div>
               <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-quizizz.gif`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Questionnaires</h4>
               </div>
            </div>
        </div>
     );
}
 
export default Marketing;