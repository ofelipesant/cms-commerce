import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Orders from "../pages/Orders"
import { CommerceContextProvider } from "../contexts/commerceContext"

export default function RoutesApp(){
    return(
        <CommerceContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="pedidos" element={<Orders/>}/>
                    <Route path="carrinho" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </CommerceContextProvider>
    )
}