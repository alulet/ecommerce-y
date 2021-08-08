import React, {useContext} from "react"
import {CartContext} from './CartContext'


const Cart=(props) => {
        const {cartList, guardarItem} = useContext(CartContext)
        console.log(cartList)

return(
        <>
            {cartList.map(item=> (
                
                <div className='row' key={item.item.id}>
                    <p className='col'>{item.item.nombre}</p>
                    <p className='col'>{item.quantity}</p> 
                    <p className='col'>{item.item.precio}</p>
                </div>




            ))}
            
        </>
    )

}

export default Cart
