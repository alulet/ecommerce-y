import React from 'react'
import ItemCount from './ItemCount'


    const ItemDetail = ({image,nombre,desc,precio,id, onAdd}) => {
    
    
    return(

        <div className='card'>
            <img className='image' src={image} alt='..'/>
            <h5 className="card-title">{nombre}  </h5>  
            <p className="card-title"> {desc}</p>
            <p className="card-text"> $ {precio}</p>
            <ItemCount itemId={id} stock={5} initial={1} onAdd={onAdd} />
            
        </div>


        
    )}


export default ItemDetail