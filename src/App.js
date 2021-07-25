import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';




function App() {
    return (
    <div className="App">
    <NavBar />
    
    <ItemDetailContainer />
    </div>
    );
}

export default App;
