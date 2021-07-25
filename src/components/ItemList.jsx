import React from 'react';
import ItemDetail from '../components/ItemDetail';



function ItemList({items}) {
    return (
        <div>
        {items.map(i => <ItemDetail nombre={i.nombre} precio={i.precio} image={i.image} /> )}
        </div>
    
    )}


export default ItemList;