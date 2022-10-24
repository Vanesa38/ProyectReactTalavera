import React from 'react'
import '../ItemCart/ItemCart.css'
import '../asyncMock'
import { CartContext } from '../../CartContext/CartContext'
import { useContext } from 'react'



const ItemCart = ({id, img, name, price, quantity}) => {
    const {removeItem} = useContext (CartContext);

return (    
    <div className='containerCart'>
        <img src={img} alt={name}/>
        <h1 className="name">{name}</h1>
        <p className="price">Precio U: ${price}</p>
        <p className="SubTotal">Subtotal: ${quantity * price}</p>
        <button onClick={()=>removeItem(id)}> Eliminar</button>

    </div>
)
}

export default ItemCart