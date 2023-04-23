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

            <div className="grid grid-cols-1 gap-y-2 ">
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="flex flex-col p-2 border rounded-lg">
                        <h4>TOTAL PRODUCTS</h4>
                        {data && <h4>{data.length}</h4>}
                    </div>
                    <div className="flex flex-col p-2 border rounded-lg">
                        <h4>ACTIVE</h4>
                        {data && <h4></h4>}
                    </div>
                    <div className="flex flex-col p-2 border rounded-lg">
                        <h4>INACTIVE</h4>
                        {data && <h4></h4>}
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