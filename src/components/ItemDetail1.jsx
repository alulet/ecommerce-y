import React, { useState, useEffect } from 'react'
import { getMocks } from '../container/ItemListContainer'
import {useParams} from 'react-router-dom'
// import ItemList from './ItemList'
// import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'


    const ItemDetail1=({image,nombre,desc,precio, onAdd}) => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    console.log({ id })

    useEffect(() => {
        if(id===undefined){
            getMocks()
            .then(resp => setItem(resp))
            }
        else{
            getMocks()
            .then(resp => {
                console.log( { resp } )
                setItem(resp.filter(item => item.id===id))
        })
        }
        },[id])

        console.log(id);

        return(
        
            <div className='card'>
            <img className='image' src={item.image} alt='..'/>
            <p className="card-title"> {item.nombre}  </p>  
            <p className="card-title"> {item.desc}</p>
            <p className="card-text"> $ {item.precio}</p>
            <ItemCount itemId={id} stock={5} initial={1} onAdd={onAdd} />
            </div>
            
        
    )


}

export default ItemDetail1
