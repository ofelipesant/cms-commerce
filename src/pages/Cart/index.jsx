import { commerceContext } from "../../contexts/commerceContext"
import { useContext, useEffect } from "react"
import Cabecalho from "../../components/Cabecalho"
import { TbTrash } from 'react-icons/tb'

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
                    {cart && cart.map((element, index) => {
                        return(
                            <div key={index} className="cart-products-card">
                                <div className="product-image">
                                    <img src={element.image[0].url} alt="produto" />
                                </div>
                                <div className="infos">
                                    <p>{element.name}</p>
                                    <h3>R${element.price.toFixed(2)}</h3>
                                    <button>
                                        <TbTrash/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                
                <button>Finalizar pedido</button>
            </div>
        </section>
        </>
    )
}