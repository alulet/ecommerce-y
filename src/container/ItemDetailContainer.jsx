import React, { useState, useEffect } from "react";
// import { getMocks } from "./ItemListContainer";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "./firebaseService";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const { categoria } = useParams();

	useEffect(() => {
		if (categoria === undefined) {
			const dbQuery = getFirestore();
			dbQuery
				.collection("Items")
				.get()
				.then((resp) =>
					setItem(resp.docs.map((ite) => ({ ...ite.data(), id: ite.id })))
				)
				.catch((err) => {
					console.log(err);
				});
		} else {
			const dbQuery = getFirestore();
			dbQuery
				.collection("Items")
				.where("categoria", "==", categoria)
				.get()
				.then((resp) =>
					setItem(resp.docs.map((ite) => ({ ...ite.data(), id: ite.id })))
				)
				.catch((err) => {
					console.log(err);
				});
		}
	}, [categoria]);

	return (
		<div className='Catalogo'>
			<ItemList items={item} />
		</div>
	);
};

export default ItemDetailContainer;
