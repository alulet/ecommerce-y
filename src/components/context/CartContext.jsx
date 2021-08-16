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
        const idx = cart.findIndex(item => newItem.id !== item.id)
        console.log(idx)
        if(idx === -1 ){
                        setCart([...cart, newItem])
                        console.log({newItem,cantidad})
                        }else{
                        const oldList = cart.filter(old => old.id !== newItem.id)
                        console.log({oldList,newItem,cantidad})
                        setCart([...oldList, newItem, cantidad])

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
