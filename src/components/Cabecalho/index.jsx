import { Link } from "react-router-dom"
import CartComponent from "../CartComponent"

export default function Cabecalho(){

    return(
        <header className="cabecalho">
            <nav className="nav-menu">
                    <Link to={"/"}>Produtos</Link>
                    <Link to={"/pedidos"}>Pedidos</Link> 
            </nav>
            <CartComponent/>
        </header>
    )
}