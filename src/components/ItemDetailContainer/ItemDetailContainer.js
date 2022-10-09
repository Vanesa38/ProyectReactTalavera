import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer =() => {
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        getProductById(`1`)
        .then(product => {
            setProduct(product)
        })
        
    }, [])

    return  (
        <div>

         <ItemDetail {... product}/>
           
        </div>
    )
}

export default ItemDetailContainer 