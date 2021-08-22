import { BiCart } from "react-icons/bi";
import { useCart } from "./context/CartContext";

function CartWidget() {
	const state = useCart();

	const calculateItemsQuantity = (items) => {
		console.log({ items });
		return (
			items &&
			items.reduce((acc, item) => {
				return parseInt(acc, 10) + item.count;
			}, 0)
		);
	};

	return (
		<div className=''>
			{state.length > 0 && (
				<div>
					<p>{calculateItemsQuantity(state)}</p>
					<BiCart />
				</div>
			)}
		</div>
	);
}

export default CartWidget;
