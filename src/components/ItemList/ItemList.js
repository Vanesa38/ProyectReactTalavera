import Item from "../Item/Item"
import "../ItemList/ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className = "cardContainer">
            { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}

export default ItemList
