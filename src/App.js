import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from "./CartContext/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout'
import { NotificationProvider } from "./notification/NotificationService.jsx";






function App() {

  

  return (
    
    <div className="App">
     <NotificationProvider>
    <CartProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= '/' element= {<ItemListContainer/>} />
        <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
        <Route path = '/detail/:productId' element= {<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </NotificationProvider>
      
  </div>
  );
  
}

export default App;
