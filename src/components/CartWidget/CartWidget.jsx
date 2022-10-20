import cart from "./assets/Carro1.PNG";
import "../CartWidget/CartWidget.css"
import { useContext } from 'react';
import { CartContext } from "../../CartContext/CartContext";


const CartWidget = () => {
        const { totalQuantity } = useContext (CartContext);
        return (
                <div className="container-widget">
                <div className="widget">
                        <img src={cart} alt="cart" />
                </div>
                <div className="cart-span">
                 <sup>{totalQuantity}</sup>
               </div>
               </div>
        
        
        );
}


export default CartWidget