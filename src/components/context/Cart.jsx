import React, {useContext} from "react"
import {CartContext} from './CartContext'


const Cart=(props) => {
        const {cart, borrarItem} = useContext(CartContext)
        

return(
        <>
            {cart.map(item=> (
                
                <div className='row' key={item.id}>
                    <p className='col'> <button onClick={()=> borrarItem(item)}> Eliminar </button> </p>
                    <p className='col'> {item.desc}</p>
                    <p className='col'> {item.quantity}</p>  
                    <p className='col'> ${item.precio}</p>
                </div>




            ))}
            
        </>
    )

}

export default Cart
