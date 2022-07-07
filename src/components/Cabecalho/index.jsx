import { Link } from "react-router-dom"
import CartComponent from "../CartComponent"
import './cabecalho.sass'

export default function Cabecalho(){

    return(
        <header className="cabecalho">
            <nav className="nav-menu">
                    <Link to={"/"} className="nav-link">Produtos</Link>
                    <Link to={"/pedidos"} className="nav-link">Pedidos</Link> 
            </nav>
            <nav className="nav-menu">    
                <Link to={'/carrinho'} className="nav-link">
                    <CartComponent/>
                </Link>
            </nav>
        </header>
    )
}