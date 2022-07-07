import { useContext } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { commerceContext } from '../../contexts/commerceContext'
import './cart-component.sass'

export default function CartComponent(){
    const {cart} = useContext(commerceContext)

    return(
        <div className="cart-component">
           <MdShoppingCart className='cart-icon'/>
           <span className='cart-qtd'>{cart.length}</span>
        </div>
    )
}