import { commerceContext } from "../../contexts/commerceContext"
import { useContext, useEffect } from "react"

export default function Cart(){
    const {products, cart} = useContext(commerceContext)

    console.log(cart)
    
    return(
        <div>carrinho</div>
    )
}