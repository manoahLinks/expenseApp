import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDataContext } from "../../hooks/useDataContext";

const SalesForm = ({modalOff}) => {

    const [product, setProduct] = useState({})
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

        const item = {product, quantity, unitPrice}

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

        console.log('here1')

        const cart2 = cart.filter((item)=>{
            return item.product !== itemId
        })

        console.log(cart)

        localStorage.setItem('cart', JSON.stringify(cart2))

        console.log(cart2)
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
                        className="text-xs rounded-md border-slate-300"
                        required
                    >
                        <option value="">select customer</option>
                        {customers && customers.map((customer)=>(
                            <option key={customer._id} value={customer._id}>{customer.name}</option>
                        ))}
                    </select>

                    <div className="grid grid-cols-4 gap-x-2">
                        <select 
                            className="col-span-2 text-xs rounded-md border-slate-300"
                            value={product}
                            onChange={(e)=>{
                                setProduct(e.target.value.split(',')[0])
                                setUnitPrice(e.target.value.split(',')[1])
                            }}
                            required
                        >
                            <option value="">select product</option>
                            {products && products.map((product)=> (
                                <option key={product._id} value={[product.name, product.marketPrice]}>{product.name}</option>
                            ))}
                        </select>
                        <input 
                            type="number"
                            className="text-xs rounded-md border-slate-300"
                            placeholder="qty"
                            value={quantity}
                            onChange={(e)=>{setQuantity(e.target.value)}}
                            required
                        />
                        <button onClick={handleAddTocart} className="bg-primary opacity-50 text-white">Add</button>
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
                        <div key={item.product} className="grid grid-cols-6 hover:bg-white">
                            <h4 className="truncate col-span-2">{item.product}</h4>
                            <h4>{item.quantity}</h4>
                            <h4>{item.unitPrice}</h4>
                            <h4>{item.quantity * item.unitPrice}</h4>
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
                            
                    <div className="grid grid-cols-2 p-5 bg-green-50 rounded-lg">
                        <div className="flex relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <small className="text-center -mx-2 -mt-2 m-auto bg-red-500 w-4 h-4 text-white text-xs rounded-full px-0.5">{data.length}</small>
                        </div>
                        <div className="flex">

                        </div>
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