import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import React, { useState } from 'react';
import ItemCount from './components/ItemCount';



function App() {
    
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer />
     </div>
  );
}

export default App;
