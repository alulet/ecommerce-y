import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { getFirestore } from "../container/firebaseService";

import { useDispatchCart } from "../components/context/CartContext";

const ItemDetail = (item) => {
	const [cantidad, setCantidad] = useState(0);
	const dispatch = useDispatchCart();
	console.log(item)
	

	///// ACA IRIA EL FIREBASE DEL ITEM POR ID // 
	
	const onAdd = (count) => {
		setCantidad(count);
		dispatch({ type: "ADD", item });
	};
	
	return (
		<div className='card'>
			<Link to={`/detalle/${item.id}`}>
				<img className='image' src={item.image} alt='..' />
				<p className='card-title'> {item.nombre} </p>
				<p className='card-title'> {item.desc}</p>
				<p className='card-text'> $ {item.precio}</p>
			</Link>
			<ItemCount itemId={item.id} stock={5} initial={1} onAdd={onAdd} />
		</div>
	);
};

export default ItemDetail;
