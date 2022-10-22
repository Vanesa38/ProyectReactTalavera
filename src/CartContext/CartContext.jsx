import { useState, useEffect, useContext, createContext } from "react";
import React from "react";


export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})
    

  export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  console.log("carrito:", cart);
  console.log("contador:",totalQuantity)

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

  // función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
  }
  
  export const useCart = () => {
    return useContext(CartContext)
  }

  export default CartProvider
