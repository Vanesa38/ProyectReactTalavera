import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = ({ }) => {
     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)

     const { categoryId } = useParams()


     useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
     }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

     return (
        <div className='contenedorLista1'>
            <h1>Listado de Productos</h1>
            <ItemList products={products}/>
        </div>
     )
     
     
}

export default ItemListContainer