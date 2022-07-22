import { useContext, useEffect } from "react";
import { commerceContext } from "../../contexts/commerceContext";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
    query{
        products{
            id
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
     
    const add = (product) => () => {
        addToCart(product)
    } 

    const addToCart = (product) => {
        //criação de uma constante e fazendo o spread com o state do carrinho
        const selectProd = [...cart]

        //push do produto para dentro da array, pois não é possível manipular um estado diretamente com as funções de array
        selectProd.push(product)

        window.localStorage.setItem('cart', JSON.stringify(selectProd)) 

        //setando o cart com o array já modificado
        setCart(selectProd) 
    }
    
    useEffect(() => {
        setProducts(data)  
    },[data])

    useEffect(() => {
        const cartStorage = window.localStorage.getItem('cart')
        if(cartStorage){
            setCart(JSON.parse(cartStorage))
        }
    },[])

    return(
        <main>
            <section className="products-list">
                {products && products.products.map((element) => {
                    return(
                        <div key={element.id} className="product-card">
                            <div className="product-image-container">
                                <img src={element.image[0].url} alt="product-image" className="product-image" />
                            </div>
                            <div className="product-infos">
                                <h2 className="product-title">{element.name}</h2>
                                <p className="product-description">{element.description}</p>
                                <h3 className="product-price">{element.price}</h3>
                            </div>
                            <button onClick={add(element)}>Adicionar ao carrinho</button>
                        </div>
                    )
                })} 

            </section>
        </main>
    )
}