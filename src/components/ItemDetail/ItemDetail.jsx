import'../asyncMock'
import '../ItemDetail/ItemDetail.css'
import Counter from '../Counter/Counter'
import ItemCount from '../ItemCount.jsx/ItemCount'

const ItemDetail = ({ img, name, category, price, description }) => {

const handleOnAdd = () => {
    console.log(
        'se agrego al carrito'
    )
}
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            <Counter/>
            <button id='buttonagregaralcarro' className='carro'>agregar al carrito</button>
            <ItemCount onAdd={handleOnAdd} />
    
    </div> 
    
    )
}

export default ItemDetail