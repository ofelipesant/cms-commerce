import { commerceContext } from "../../contexts/commerceContext"
import { useContext, useEffect } from "react"
import { TbTrash } from 'react-icons/tb'
import OrderCheckout from "../OrderCheckout"
import './cart.sass'

export default function CartCheckout(){
    const { cart, setCart, setTotalPrice } = useContext(commerceContext)

    const remove = (index) => () => {
        removeToCart(index)
    }

    const removeToCart = (index) => {
        const cartSpliced = [...cart]

        if (cartSpliced.length === 1) {
            cartSpliced.pop()
            setCart([])
        }

        //função splice para remover o elemento que foi clicado da array do carrinho
        cartSpliced.splice(index, index)
        window.localStorage.setItem('cart', JSON.stringify(cartSpliced))
        setCart(cartSpliced)
    }

    const getTotalPrice = () => {
        const copyCart = [...cart]
        const cartPrices = []

        /*
        repetição para enviar para a const copyCart apenas os preços de cada elemento do estado,
        criando uma array apenas com os preços
        */
        copyCart.forEach((element) => {
            cartPrices.push(element.price)
        })

        //reduce para somar cada elemento da array e retornar o valor final
         const total = cartPrices.reduce((soma, index) => {
            return soma + index
        }) 
        
        setTotalPrice(total.toFixed(2))
    }

    useEffect(() => {
        const cartStorage = window.localStorage.getItem('cart')
        setCart(JSON.parse(cartStorage))
    }, [])

    useEffect(() => {
        if(cart.length > 0){
            getTotalPrice()
        }      
    }, [cart])

    return(
        <section className="cart-section">
                <div className="list-products">
                    <div className="cart-card">
                        {cart && cart.map((element, index) => {
                            return (
                                <div key={index} className="cart-products-card">
                                    <div className="product-image">
                                        <img src={element.image[0].url} alt="produto" />
                                    </div>
                                    <div className="infos">
                                        <p className="product-title">{element.name}</p>
                                        <h3 className="product-price">R${element.price.toFixed(2)}</h3>
                                        <button className="remove-btn">
                                            <TbTrash className="remove-icon" onClick={remove(index)} />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <OrderCheckout cart={cart}/>
                </div>
            </section>
    )
}