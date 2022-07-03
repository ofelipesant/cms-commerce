import { useContext, useEffect } from "react";
import { commerceContext } from "../../contexts/commerceContext";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
    query{
        products{
            name
            description
            price
            stock
            active
        }
    }
`

export default function Products(){
    const {products, setProducts} = useContext(commerceContext)
    const {data} = useQuery(GET_PRODUCTS)

    const productsQuery = async () => {
        await setProducts(data.products)
    }
    
    useEffect(() => {
        productsQuery()
    })
    
    console.log(products)

    return(
        <div>
            {products && products.map((element, index) => {
                return(
                    <div key={index}>
                        {element.name}
                        <p>{element.price}</p>
                    </div>
                )
            })} 
        </div>
    )
}