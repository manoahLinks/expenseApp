import { Link } from "react-router-dom";

const RawMaterials = () => {
    return ( 
        <div className="flex flex-col justify-evenly p-2 gap-y-4">
            <h4 className="text-xl text-center font-light p-5">Raw Materials</h4>
            <div className="grid grid-cols-1 gap-y-6 items-center">
            <Link to={`/rawmaterials/new`} className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-add-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Register new Raw material</h4>
            </Link>
            <Link to={`/rawmaterials/list`} className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-flour-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">View Raw materials</h4>
            </Link>
            <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-in-transit-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Recieve Raw material</h4>
            </div>
            <div className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-inspection-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Assign to Production</h4>
            </div>
            <Link to={`/rmanalytics`} className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-analytics-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">View Stock analysis</h4>
            </Link>
            </div>
        </div>
     );
}
 
export default RawMaterials;