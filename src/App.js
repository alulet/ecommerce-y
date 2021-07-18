import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import React, { useState } from 'react';
import ItemCount from './components/ItemCount';



function App() {
  const [stock, setStock] = useState(0);
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer nombre="Bienvenido"/>
     <ItemCount stock={5} initial={1}/>
     </div>
  );
}

export default App;
