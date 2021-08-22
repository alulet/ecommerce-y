import React, { useContext, useReducer, createContext, useState } from "react";
// import { CartContext } from './CartContext'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return guardarItem(state, action.item);
		case "REMOVE":
			const newArray = [...state];
			newArray.splice(action.index, 1);
			return newArray;
		default:
			throw new Error(`unknown action ${action.type}`);
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, []);

	return (
		<CartDispatchContext.Provider value={dispatch}>
			<CartStateContext.Provider value={state}>
				{children}
			</CartStateContext.Provider>
		</CartDispatchContext.Provider>
	);
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

const guardarItem = (items, newItem) => {
	console.log({ items, newItem });
	const idx = items.findIndex((item) => newItem.id === item.id);
	let newItems;
	console.log({ idx });
	if (idx === -1) {
		newItems = [...items, newItem];
	} else {
		const oldList = items.filter((old) => old.id !== newItem.id);
		console.log({ oldList });
		const oldItem = items.filter((old) => old.id === newItem.id)[0];
		console.log({ oldItem });
		const itemAddedCount = oldItem.count + newItem.count;
		console.log({ itemAddedCount });
		newItem.count = itemAddedCount;
		newItems = [...oldList, newItem];
	}
	return newItems;
};
