import { Link } from "react-router-dom";

const Products = () => {
    return ( 
        <div className="flex flex-col justify-evenly p-2 gap-y-4">
            <h4 className="text-xl text-center font-light p-5">Products</h4>
            <div className="grid grid-cols-1 gap-y-6 items-center">
            <Link to={`/products/new`} className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-add-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Create a new product</h4>
            </Link>
            <Link to={`/products/list`} className="flex gap-x-4 items-center shadow-md rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-binoculars-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">View all products</h4>
            </Link>
            <Link className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-price-tag-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Change product price</h4>
            </Link>
            <Link className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    <img className="-mt-5" src={require(`../../assets/icons8-inspection-48.png`)} />
                    <h4 className="font-semibold text-sm text-gray-400 text-center">change product quantity</h4>
            </Link>
            <Link className="flex gap-x-4 shadow-md items-center rounded-lg p-2 bg-gray-50">
                    {<img className="-mt-5" src={require(`../../assets/icons8-analytics-48.png`)} alt="" />}
                    <h4 className="font-semibold text-sm text-gray-400 text-center">Product analysis</h4>
            </Link>
            </div>
        </div>
     );
}
 
export default Products;