import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer/>
     <ItemDetailContainer/>
     
    </div>
  );
}

export default App;
