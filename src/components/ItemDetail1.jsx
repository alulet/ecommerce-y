import React, { useState, useEffect } from 'react'
import { getMocks } from '../container/ItemListContainer'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
// import ItemDetail from './ItemDetail'
// import ItemCount from './ItemCount'


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
            <div>
                <ItemList items={item}/>
            </div>
            
        
    )


}

export default ItemDetail1
