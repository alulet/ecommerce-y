import { React } from "react";
import ItemCard from "../components/ItemCard";
import { getFirestore } from "../container/firebaseService";

const ItemList = ({ items }) => {
	// const setId = undefined;
	// console.log(items);
	// console.log(items.id);

	// if (items.id === undefined) {
	// 	const dbQuery = getFirestore();
	// 	dbQuery
	// 		.collection("Items")
	// 		.get()
	// 		.then((resp) =>
	// 			setId(resp.docs.map((ite) => ({ ...ite.data(), id: ite.id })))
	// 		)
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// } else {
	// 	const dbQuery = getFirestore();
	// 	dbQuery
	// 		.collection("Items")
	// 		.get()
	// 		.then((resp) =>
	// 			setId(resp.docs.map((ite) => ({ ...ite.data(), id: ite.id })))
	// 		)
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }

	return (
		<div>
			{items &&
				items.map((i) => (
					<ItemCard
						key={i.id}
						nombre={i.nombre}
						precio={i.precio}
						image={i.image}
						id={i.id}
						desc={i.desc}
					/>
				))}
		</div>
	);
};

export default ItemList;
