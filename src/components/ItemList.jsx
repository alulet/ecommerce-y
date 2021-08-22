import React from "react";
import ItemCard from "../components/ItemCard";

const ItemList = ({ items }) => {
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
