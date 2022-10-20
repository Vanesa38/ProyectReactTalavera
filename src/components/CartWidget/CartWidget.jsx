import cart from "./assets/Carro1.PNG";
import "../CartWidget/CartWidget.css"
import { useCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const CartWidget = () => {
        const { totalQuantity } = useCartContext ();
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