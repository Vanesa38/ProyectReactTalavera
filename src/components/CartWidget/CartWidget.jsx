import cart from "./assets/Carro1.PNG";
import "../CartWidget/CartWidget.css"

const CartWidget = () => {
        return (
                <div className="container-widget">
                        <img src={cart} alt="cart" />
                        <p>0</p>
                </div>

        );
}

export default CartWidget