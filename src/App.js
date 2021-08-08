import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/context/Cart';
import ItemDetail1 from './components/ItemDetail1'
import CartContext from './components/context/CartContext'

function App() {

    return (
    
        <Router>
        <CartContext>
        <NavBar />
        <div className="App">
        <Switch>
        <Route exact path="/item/:categoria"> <ItemDetailContainer /></Route>
        <Route exact path="/"><ItemDetailContainer /></Route>
        <Route exact path='/detalle/:id'> <ItemDetail1 /> </Route>
        <Route exact path="/cart"><Cart /></Route>
        </Switch>
        </div>
        </CartContext>
        </Router>
        
    );}


export default App
