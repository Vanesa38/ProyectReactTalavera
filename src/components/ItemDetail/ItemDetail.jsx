import '../ItemDetail/ItemDetail.css'
import { useCart } from '../../CartContext/CartContext'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, img, name, category, price, description, stock }) => {

    const [goToCart, setGoToCart] = useState (false)

    const {addItem} = useCart ( );

    const onAdd = (count) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description
        }
        setGoToCart(true);
        addItem (productToAdd, count);
        
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
                :<ItemCount onAdd={onAdd} stock={stock}/>
            }
    
    </div> 
    
    )
}

export default ItemDetail