import'../asyncMock'
import '../ItemDetail/ItemDetail.css'
import { useCartContext } from '../../CartContext/CartContext'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ img, name, category, price, description }) => {

    const [goToCart, setGoToCart] = useState (false)

    const {addProduct} = useCartContext ( );

    const onAdd = (count) => {
    console.log('se agrego al carrito', (count), 'unidades'  );
    setGoToCart(true);
    addProduct (name, count);
        
}
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            { goToCart
                ? <Link to='/cart'>Terminar Compra</Link>
                :<ItemCount onAdd={onAdd}/>
            }
    
    </div> 
    
    )
}

export default ItemDetail