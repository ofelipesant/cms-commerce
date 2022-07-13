import { useContext, useEffect } from "react"
import { commerceContext } from "../../contexts/commerceContext"
import { gql, useMutation } from "@apollo/client"
import "./order-checkout.sass"

const POST_ORDER = gql`
  mutation createOrder($products:Array!, $totalPrice:Number!){
      createOrder(data: {products: $products, totalPrice: $totalPrice})
  }
`

export default function OrderCheckout() {
  const { totalPrice, cart } = useContext(commerceContext)
  const [createOrder] = useMutation(POST_ORDER)

  const handleOrder = () => {
    createOrder({variables:{
      products: cart,
      totalPrice: totalPrice
    }})
  }

  useEffect(() => {
    console.log("está vindo do checkout", cart)
    console.log("está vindo do checkout", totalPrice)
  }, [cart, totalPrice]);

  return (
    <div className="confirm-order">
      <label className="total-label">Valor total:</label>
      <p className="total-price">R${totalPrice}</p>
      <button className="confirm-order-btn" onClick={handleOrder}>FINALIZAR PEDIDO</button>
    </div>
  );
}
