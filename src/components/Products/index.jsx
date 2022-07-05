import { useContext, useEffect } from "react";
import { commerceContext } from "../../contexts/commerceContext";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
    query{
        products{
            name
            description
            price
            active
            image{
                url
            }
        }
    }
`

export default function Products(){
    const { cart, setCart, products, setProducts } = useContext(commerceContext)
    const { data } = useQuery(GET_PRODUCTS)
     
    useEffect(() => {
        setProducts(data)  
    },[data])
    
    const addToCart = (product) => {
        const selectProd = cart
        selectProd.push(product)
        setCart(...selectProd)
        
        console.log(cart)
        
    }

    const add = (product) => () => {
        addToCart(product)
    }

    return(
        <main>
            <section className="products-list">
                {products && products.products.map((element, index) => {
                    return(
                        <div key={index} className="product-card">
                            <div className="product-image-container">
                                <img src={element.image[0].url} alt="product-image" className="product-image" />
                            </div>
                            <div className="product-infos">
                                <h2 className="product-title">{element.name}</h2>
                                <p className="product-description">{element.description}</p>
                                <h3 className="product-price">{element.price}</h3>
                            </div>
                            <button onClick={add(element)}>PUTA MERDA</button>
                        </div>
                    )
                })} 
            </section>
        </main>
    )
}