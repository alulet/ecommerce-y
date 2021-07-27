import React, { useState, useEffect } from 'react'
import { getMocks } from '../servicios/getMocks'
import ItemList from '../components/ItemList'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        if(itemId===undefined){
            getMocks()
            .then(resp => setItem(resp))
            }
        else{
            getMocks()
            .then(resp => setItem(resp.filter(items => items===itemId)))
        }
        },[itemId])

        console.log(itemId);
        
    return (

        <div class="Catalogo">
        <ItemList items={item} />
        </div>

    )

}

export default ItemDetailContainer

