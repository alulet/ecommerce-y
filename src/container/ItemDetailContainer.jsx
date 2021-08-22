import React, { useState, useEffect } from "react";
// import { getMocks } from "./ItemListContainer";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "./firebaseService";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const { categoria } = useParams();

	useEffect(() => {
		const dbQuery = getFirestore();
		dbQuery
			.collection("Items")
			.where('categoria', '==' , 'Pantalon').get()
			.then(resp => setItem(resp.docs.map(ite => ({...ite.data(), id: ite.id }))));
	}, [categoria]);

	console.log(item)
	console.log(categoria)
	return (
		<div className='Catalogo'>
			<ItemList items={item} />
		</div>
	);
};

export default ItemDetailContainer;
