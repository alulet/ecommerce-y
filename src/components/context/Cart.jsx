import React from 'react'
import { useCart, useDispatchCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = index => {
    dispatch({ type: "REMOVE", index })
  }

  const calcularPrecioTotal = () => {
    let precioTotal = 0;
    state.forEach(item => {
      precioTotal += calcularPrecio(item);
    })
    return precioTotal;
  }

  return (
      <main>
        { state.length > 0 ? state.map((item, index) => (
          <CartItem handleRemove={handleRemove} key={index} item={item} index={index}/>
        )) : <Link to={`/`}> Ir a la página de inicio </Link>}

        { state.length > 0 && <p className='row'> Precio total de la compra: ${calcularPrecioTotal()}</p> }
      </main>
  )


}

const calcularPrecio = item => {
  return item.precio * item.count
}

const CartItem = ({ item, index, handleRemove }) => {
  return(
      <main>
        { item &&
          <div className='row' key={index}>
            <p className='col'>
              <button onClick={ () => handleRemove(index) }> Eliminar</button>
            </p>
            <p className='col'>Has comprado {item.count} unidades de { item.desc }</p>
            <p className='col'> ${ calcularPrecio(item) }</p>
          </div>
        }
      </main>
  )
}

export default Cart
