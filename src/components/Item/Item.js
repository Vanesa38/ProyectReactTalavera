import  '../Item/Item.css'
import {Link} from 'react-router-dom'

const Item = ({id,img, name, category, price }) => {
    return (
        <div className="contenedorLista">
              <div className="cardContainer" key={id}>
                <div className="imageCard">
                  <img src={img} alt="" />
                </div>
                <div className="detailsCard">
                  <h5>{name}</h5>
                </div>
                <div className="category">
                  <h3>{category}</h3>
                </div>
                <div className="price">
                    <h5> ${price}</h5>
                </div>
                <div className="buttonVerdetalle">
                <Link to = {`/detail/${id}`}>Ver detalle</Link>
            </div>
            </div>
        </div>
    )
}

export default Item