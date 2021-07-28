import React, { useState, useEffect } from 'react'
import { getMocks } from '../servicios/getMocks'
import ItemList from '../components/ItemList'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
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
        
    return (

        <div className="Catalogo">
        <ItemList items={item} />
        </div>

    )

}

export default ItemDetailContainer

