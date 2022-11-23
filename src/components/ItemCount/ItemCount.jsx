import React from "react"
import {useState} from 'react'
import './ItemCount.css'


const ItemCount  = ({stock =0, initial=1, onAdd}) => {

    const [count, setCount] = useState (initial)

    const increment = () => {
        if (count < stock) {
        setCount (count +1)
        }
    }

    const decrement = () => {
        if (count > 1){
        setCount (count -1)
        }
    }


    return (
        
        <div>
            
                <div className="contador">
                    <button id="addButton" className="elements" onClick={decrement}> - </button> 
                    <h2 className="elements">{count}</h2>
                    <button id="subsButton"  className="elements" onClick={increment}> + </button>
                </div>

                <div className="botonFinal">
                    
                { count > 0 ? 
                    <button id ="cartButton" className="ui bottom attached button" onClick={() => onAdd (count)}>
                        Agregar al Carrito
                    </button>    
                : 
                    <button id ="cartButton" className="ui bottom attached button disabled" onClick={() => onAdd (count)}>
                        Agregar al Carrito
                    </button>
                } 
                </div>

        </div>
        
        )
} 

export default ItemCount