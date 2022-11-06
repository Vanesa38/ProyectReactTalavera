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




  const addItem(productToAdd, count) {
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

  
    
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  
    
  const removeItem = (id) => {
    const productLess = cart.filter((prod) => prod.id !== id);
    setCart(productLess);
  };

    
    
  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        total = total + prod.price * prod.count
    })
    return total
  }

  
  
  
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
