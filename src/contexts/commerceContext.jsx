import { createContext, useState } from "react";

export const commerceContext = createContext()

export const CommerceContextProvider = ({children}) => { 
    const [products, setProducts] = useState()
    const [orders, setOrders] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [cart, setCart] = useState([{}])


    return(
       <commerceContext.Provider value={{
        products,
        setProducts,
        orders,
        setOrders,
        totalPrice,
        setTotalPrice,
        cart,
        setCart,
       }}>
        {children}
       </commerceContext.Provider>
    )

}