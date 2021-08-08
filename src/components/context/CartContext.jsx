import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export default function UseCartContext({children}){
    const [cart, setCart] = useState([],
    function  guardarItem(newItem) {
        // const idx = setCart.findIndex(item => newItem.item.id === item.item.id)
        // if(idx=== -1 ){
        //                 setCart([...cart, newItem])
        // }else{
        //                 const newQuantity = cart[idx].quantity + newItem.quantity
        //                 const oldList = setCart.filter(old => old.item.id !== newItem.item.id)
        //                 setCart([...oldList, {newItem.item, newQuantity}])

        // }
        

    })

    return(
        <CartContext.Provider value={{
            cart,
            // guardarItem,
        }}>
            {children}
        </CartContext.Provider>
    )

};
