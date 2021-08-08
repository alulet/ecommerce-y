import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'

    const ItemDetail = ({image,nombre,desc,precio,id}) => {
    
        const [cantidad, setCantidad] = useState(0)
        const [pulsar, setPulsar] = useState(false)

        function onAdd(count){
            setCantidad(count)
            setPulsar(true)
        }
        console.log(cantidad)
        console.log(pulsar)
    
    return(
        
            <div className='card'>
            <Link to={`/detalle/${id}`}> 
            <img className='image' src={image} alt='..'/>
            <p className="card-title"> {nombre}  </p>  
            <p className="card-title"> {desc}</p>
            <p className="card-text"> $ {precio}</p>
            </Link>
            <ItemCount itemId={id} stock={5} initial={1} onAdd={onAdd} />
            </div>
        


        
    )}


export default ItemDetail