import React from 'react';
import ItemDetail from '../components/ItemDetail';





function ItemList({items}) {
    return (
        <div>
        {items.map(i => <ItemDetail nombre={i.nombre} precio={i.precio} image={i.image} id={i.id}/> )}
        </div>
    
    )}


export default ItemList;