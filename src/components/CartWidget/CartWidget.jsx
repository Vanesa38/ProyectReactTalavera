import cart from "./assets/Carro1.PNG";
import "../CartWidget/CartWidget.css"
import { useContext } from 'react';
import { CartContext } from "../../CartContext/CartContext";
import { Link }from 'react-router-dom'

const CartWidget = () => {
        const { totalQuantity } = useContext (CartContext);
        return (
                <Link to="/cart">
                    <div className="container-widget">
                <div className="widget">
                        <img src={cart} alt="cart" />
                </div>
                <div className="cart-span">
                 <sup>{totalQuantity}</sup>
               </div>
               </div>     
               </Link>

        );
}


export default CartWidget