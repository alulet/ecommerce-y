import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';




function App() {


    return (
    <Router>
        <NavBar />
        <div className="App">
        <Switch>
        <Route path="/item/:id">
        <ItemDetailContainer />
        </Route>
        <Route path="/">
        <ItemDetailContainer />
        </Route>
        </Switch>
        </div>
        
    </Router>
    );
}

export default App;
