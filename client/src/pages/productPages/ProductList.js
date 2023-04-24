import React, { useState, useEffect } from "react";
import {useDataContext} from '../../hooks/useDataContext'
import { useAuthContext } from "../../hooks/useAuthContext";
import ProductDetails from "./ProductDetails";
import ProductTable from "./components/ProductTable";
import ProductGrid from "./components/ProductGrid";

const ProductList = () => {

    const {data, dispatch} = useDataContext()
    const [selectedProduct, setSelectedProduct] = useState(null)
    const {user} = useAuthContext()

    const modalOn = async (data) => {
        
        const response = await fetch(`http://localhost:5500/api/product/${data._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            setSelectedProduct({...data ,json})
        }
    }

    const modalOff = () => {
        setSelectedProduct(false)
    }

    useEffect(()=>{

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5500/api/product`, {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }    
        }
        if(user){
            fetchData()
        }
        
    }, [dispatch, user, data])

    return ( 
        <div className="grid grid-cols-1 p-2 md:p-5 rounded-md gap-y-4 h-96">

            <div className="flex flex-col gap-y-4 gap-y-8 ">
                <div className="grid grid-cols-3 md:gap-x-8 gap-x-4">
                    <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2 border rounded-lg">
                        <div className="flex items-center">
                            <small className="uppercase font-semibold">TOTAL PRODUCTS</small>
                        </div>
                        {data && <h4 className="text-[30px] font-semibold text-slate-400">{data.length}</h4>}
                    </div>
                    <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2  border rounded-lg">
                        <div className="flex items-center">
                            <small className="uppercase font-semibold">PRODUCTION METRIX</small>
                        </div>
                        {data && <h4 className="text-[30px] font-semibold text-slate-400"></h4>}
                    </div>
                    <div className="flex flex-col p-2 md:p-5 shadow bg-white md:gap-y-4 gap-y-2  border rounded-lg">
                        <div className="flex items-center">
                            <small className="uppercase font-semibold">SALES METRIX</small>
                        </div>
                        {data && <h4 className="text-[30px] font-semibold text-slate-400"></h4>}
                    </div>
                </div>
                {data && <ProductTable data={data} modalOn={modalOn} />}
                {data && <ProductGrid data={data} modalOn={modalOn}/>}
                
            </div>
            {selectedProduct && <ProductDetails product={selectedProduct} modalOff={modalOff} />}
        </div>
     );
}
 
export default ProductList;