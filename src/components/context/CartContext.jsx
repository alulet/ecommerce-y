import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export default function UseCartContext({children}){
    const [cart, setCart] = useState([])
    const borrarItem = (itemToDelete) => {
        const idx = cart.findIndex(item => itemToDelete.id === item.id)
        if (idx !== -1 ){ 
            const newCart = cart.filter(e => itemToDelete.id !== e.id)
            setCart(newCart)
    
        }
    }
    const  guardarItem = (newItem, cantidad) => {
        console.log({cantidad})
        const idx = cart.findIndex(item => newItem.id === item.id)
        if(idx === -1 ){
                        setCart([...cart, newItem, cantidad])
        }else{
                        const sasa = newItem
                        sasa.quantity = cart[idx].quantity ? cart[idx].quantity + cantidad : cantidad
                        const oldList = cart.filter(old => old.id !== newItem.id)
                        setCart([...oldList, {item: sasa}])

        }
        

    }

    return(
        <CartContext.Provider value={{
            cart,
            guardarItem,
            borrarItem,
        }}>
            {children}
        </CartContext.Provider>
    )

};
