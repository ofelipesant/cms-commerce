import { useContext } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { commerceContext } from '../../contexts/commerceContext'

export default function CartComponent(){
    const {cart} = useContext(commerceContext)

    console.log(cart)

    return(
        <div className="cart-component">
           <MdShoppingCart/>
        </div>
    )
}