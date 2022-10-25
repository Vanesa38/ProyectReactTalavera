
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import {Link} from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const {cart, total, getTotal, clearCart} = useContext (CartContext)

    console.log (cart);
    if (cart.length === 0) {
        return (
            <div className="Cart">
                <h1 className="title-products">No tienes productos seleccionados</h1>
                <Link to='/' className="button-finish">Volver al listado</Link>
            </div>
        )
    }

return ( 
    <div className="Cart">
        <h1 className="title-products">Tus productos:</h1>
        <hr></hr>
        <table>
        <thead>
            <tr>
                <th>id:</th>
                <th>Producto:</th>
                <th>Cantidad:</th>
                <th>Precio:</th>
                <th>Subtotal:</th>
                <th>Eliminar:</th>
            </tr>
        </thead>
        <tbody>
        {
            cart.map(product =>
                <ItemCart key={product.id} {...product} />)
                }
           

        </tbody>
        </table>
        <h3>Cantidad total de productos: {}</h3>
        <h1 className="title-products">Total: ${getTotal()}</h1>
        <button className="button-cart" onClick={clearCart}>Eliminar todo</button>
    </div>
 );
}

export default Cart;