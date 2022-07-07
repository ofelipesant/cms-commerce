import { commerceContext } from "../../contexts/commerceContext"
import { useContext, useEffect } from "react"
import Cabecalho from "../../components/Cabecalho"
import { TbTrash } from 'react-icons/tb'
import './cart.sass'

export default function Cart(){
    const { cart, setCart } = useContext(commerceContext)

    useEffect(() => {
        const cartStorage = window.localStorage.getItem('cart')
        setCart(JSON.parse(cartStorage))
    },[])

    useEffect(() => {
        console.log(cart)
    },[])

    return(
        <>
        <Cabecalho/>

        <section className="cart-section">
            <div className="list-products">
                <div className="cart-card">
                    {cart && cart.map((element, index) => {
                        return(
                            <div key={index} className="cart-products-card">
                                <div className="product-image">
                                    <img src={element.image[0].url} alt="produto" />
                                </div>
                                <div className="infos">
                                    <p className="product-title">{element.name}</p>
                                    <h3 className="product-price">R${element.price.toFixed(2)}</h3>
                                    <button className="remove-btn">
                                        <TbTrash className="remove-icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="confirm-order">
                    <label className="total-label">Valor total:</label>
                    <p className="total-price">R$XX,XX</p>
                    <button className="confirm-order-btn">FINALIZAR PEDIDO</button>
                </div>
            </div>
        </section>
        </>
    )
}