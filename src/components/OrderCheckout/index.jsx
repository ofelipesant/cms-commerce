import { gql, useMutation } from "@apollo/client"
import "./order-checkout.sass"

const POST_ORDER = gql`
  mutation createOrder($id:[String], $totalPrice:Float){
      createOrder(
        data:{
          product: $id,
          totalPrice: $totalPrice
        }
      )
  }
`

export default function OrderCheckout(props) {
  const { cart, totalPrice } = props
  const [createOrder, { data }] = useMutation(POST_ORDER)
 
  const handleOrder = () => {
    createOrder({variables: {
        products: cart,
        totalPrice: totalPrice
    }})
  }

  return (
    <div className="confirm-order">
      <label className="total-label">Valor total:</label>
      <p className="total-price">R${totalPrice}</p>
      <button className="confirm-order-btn" onClick={handleOrder}>FINALIZAR PEDIDO</button>
    </div>
  );
}
