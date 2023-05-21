import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const SalesForm = ({modalOff}) => {

    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unitPrice, setUnitPrice] = useState('')

    const {user} = useAuthContext()
    const {data, dispatch} = useDataContext()

    const {data: customers} = useFetch(`http://localhost:5500/api/customer/`)
    const {data: products} = useFetch(`http://localhost:5500/api/product/`)

    useEffect(()=>{

        const fetchData = async () => {
            const response = localStorage.getItem('cart')
            const json = JSON.parse(response)

            if(response){
                dispatch({type: 'SET_DATA', payload: json})
            }    
        }
        
        fetchData()
        
    }, [user, data])

    const handleAddTocart = (e) =>{
        e.preventDefault()
        console.log(product, quantity)

        const item = {product, quantity}

        // Get the existing cart from localStorage
        let cart = localStorage.getItem('cart');

        // Parse the cart JSON or initialize an empty array if it's not set
        cart = cart ? JSON.parse(cart) : [];

        // Add the item to the cart
        cart.push(item);

        if(cart){
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
            setProduct('')
            setQuantity('')
        } 
        
    }

    const removeFromCart = (itemId) => {

        let cart = localStorage.getItem('cart')

        cart = JSON.parse(cart)

        cart.filter((item)=>{
            return item.product !== itemId
        })

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return ( 
        <div className="grid grid-cols-1 fixed overflow-y-scroll h-full inset-0 bg-primary bg-opacity-10 items-center justify-center justify-items-center">
            <div className="flex flex-col my-16  md:p-5 p-2 bg-white shadow-lg gap-y-4 rounded-md md:w-4/12 w-full">
                <div className="flex items-center justify-start">
                    <svg onClick={modalOff} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={5} className="w-5 h-5 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <h4 className="self-center"></h4>
                </div>
                <hr />
                <form className="grid grid-cols-1 gap-y-4 ">
                    <select 
                        className="text-xs border-b"
                    >
                        <option value="">select customer</option>
                        {customers && customers.map((customer)=>(
                            <option key={customer._id} value={customer._id}>{customer.name}</option>
                        ))}
                    </select>

                    <div className="grid grid-cols-4 gap-x-2">
                        <select 
                            className="col-span-2 text-xs"
                            value={product}
                            onChange={(e)=>{
                                setProduct(e.target.value[0]) 
                                setUnitPrice(e.target.value[1])
                            }}
                        >
                            <option value="">select product</option>
                            {products && products.map((product)=> (
                                <option key={product._id} value={[product._id, product.marketPrice]}>{product.name}</option>
                            ))}
                        </select>
                        <input 
                            type="number"
                            className="text-xs"
                            placeholder="qty"
                            value={quantity}
                            onChange={(e)=>{setQuantity(e.target.value)}}
                        />
                        <button onClick={handleAddTocart} className="bg-primary bg-white">Add</button>
                    </div>

                    <div className="flex flex-col p-5 bg-slate-100 rounded-lg gap-y-1">
                        <div className="grid grid-cols-6">
                            <h4 className="col-span-2">Product</h4>
                            <h4>Qty</h4>
                            <h4>unitprice</h4>
                            <h4>Price</h4>
                            <h4>Action</h4>
                        </div>
                        <hr />
                        {data && data.map((item)=> (
                        <div className="grid grid-cols-6 hover:bg-white">
                            <h4 className="truncate col-span-2">{item.product}</h4>
                            <h4>{item.quantity}</h4>
                            <h4>250</h4>
                            <h4>1250</h4>
                            <div className="flex items-center">
                                <svg onClick={()=>{removeFromCart(item.product)} } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 cursor-pointer fill-red-200">
                                    <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                                    <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 cursor-pointer fill-slate-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        ))}
                    </div>
            
                    <input 
                        type="number"
                        className="border-none text-xs"
                        placeholder="amount"
                    />
                </form>
                <hr />
                <div className="grid grid-cols-2">
                    <button onClick={modalOff} className="p-2 border-r hover:bg-slate-100">cancel</button>
                    <button className="p-2">Proceed</button>
                </div>
            </div>
        </div>
     );
}
 
export default SalesForm;