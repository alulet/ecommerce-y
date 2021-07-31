import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/Cart'


function App() {


    return (
    <Router>
        <NavBar />
        <div className="App">
        <Switch>
        <Route path="/item/:categoria">
        <ItemDetailContainer />
        </Route>
        <Route path="/">
        <ItemDetailContainer />
        </Route>
        <Route path="/cart">
        <Cart/>
        </Route>
        </Switch>
        </div>
        
    </Router>
    );
}

export default App;
