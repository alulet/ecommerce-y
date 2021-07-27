import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = (props) => {
    const handleCount=(cant)=>{
        alert(`ud ha agregado : ${cant}`)
    
    }
    
    return(

        <div className='card'>
            <img className='image' src={props.image} alt='..'/>
            <h5 className="card-title">{props.nombre}  </h5>  
            <p className="card-title"> {props.desc}</p>
            <p className="card-text"> $ {props.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
            
        </div>


        
    )}


export default ItemDetail