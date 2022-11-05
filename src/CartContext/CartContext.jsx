import { useState, useEffect, useContext, createContext } from "react";
import React from "react";


export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})
    

  export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  
  

  useEffect(() => {
    const getQuantity = () => {
        let accu = 0
    
        cart.forEach(prod => {
            accu += prod.count
        })
    
        return accu
    }
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
}, [cart]);


// agregar un producto al carrito

  function addItem(productToAdd, count) {
        if (!isInCart(productToAdd.id)) {
          productToAdd.count = count
            setCart([...cart, productToAdd]);
        } else {
            setCart(
                cart.map((prod) => {
                    return prod.id === productToAdd.id
                        ? { ...prod, count: productToAdd.count }
                        : prod;
                })
            );
            console.log("ya esta en el carrito");
        }
    }

  // función que devuelva true o false 
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // función para remover un producto del carrito
  const removeItem = (id) => {
    const productLess = cart.filter((prod) => prod.id !== id);
    setCart(productLess);
  };
//funcion para sumar el total de la compra
  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        total = total + prod.price * prod.count
    })
    return total
  }

  // función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  }

  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id)

    return product?.count
  }
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getTotal, clearCart, totalQuantity, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
  }
  
  export const useCart = () => {
    return useContext(CartContext)
  }

  export default CartProvider
