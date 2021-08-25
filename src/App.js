import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";
import ItemDetailContainer from "./container/ItemDetailContainer";
import Cart from "./components/context/Cart";
import ItemCard from "./components/ItemList";

function App() {
	return (
		<Router>
			<NavBar />
			<div className='App'>
				<Switch>
					<Route exact path='/item/:categoria'>
						<ItemDetailContainer />
					</Route>
					<Route exact path='/detalle/:id'>
						<ItemCard />
					</Route>
					<Route exact path='/'>
						<ItemDetailContainer />
					</Route>
					<Route exact path='/cart'>
						<Cart />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
