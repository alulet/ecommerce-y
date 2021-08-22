import React from "react";
import ItemDetail from "../components/ItemDetail";

const ItemList = ({ items }) => {
	return (
		<div>
			{items &&
				items.map((i) => (
					<ItemDetail
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
