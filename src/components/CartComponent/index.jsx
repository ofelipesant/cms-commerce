import { useContext } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { commerceContext } from '../../contexts/commerceContext'

export default function CartComponent(){
    const {cart} = useContext(commerceContext)

    return(
        <div className="cart-component">
           <MdShoppingCart/>
           <span>{cart.length}</span>
        </div>
    )
}