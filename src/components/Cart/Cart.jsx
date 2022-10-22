import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
    const {Cart, removeItem, total,} = useContext (CartContext)
    return ( 
        <div>
            <h1>Carrito</h1>
            {
                Cart.map(prod => (
                    <div>
                        {prod.name} - cantidad: {prod.count}
                        <button onClick={() => removeItem(prod.id)}>remover</button>
                        </div>
                ))
            }
            <div>
                precio total: {total}
            </div>
        </div>
     );
}
 
export default Cart;