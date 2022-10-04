import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer/>
     <Counter/>
    </div>
  );
}

export default App;
