import cart from "./assets/Carro1.PNG";
import  "../CartWidget/CartWidget.css"

const CartWidget = () => {
   return (
    <div>
            <img src={cart} alt="cart" /> <span>0</span>
    </div>
   
   );
}

export default CartWidget