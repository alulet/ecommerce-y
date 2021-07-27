import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = (props) => {
    const handleCount=(cant)=>{
        alert(`ud ha agregado : ${cant}`)
    
    }
    
    return(

        <div className='card'>
            {/* <p>{props.id}</p> */}
            <img className='image' src={props.image} alt='..'/>
            <h5 class="card-title">{props.nombre}  </h5>  
            <p class="card-text"> $ {props.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
            
        </div>


        
    )}


export default ItemDetail