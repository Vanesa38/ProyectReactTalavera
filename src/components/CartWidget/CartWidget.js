import cart from "./assets/Carro1.PNG";
import  "../CartWidget/CartWidget.css"

const CartWidget = () => {
   return (
    <div>
        <img src={cart} alt="cart" />
        <span id="contador">0</span>
    </div>
   );
}

export default CartWidget