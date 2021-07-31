import React, { useState, useEffect } from 'react'
import { getMocks } from './ItemListContainer'
import ItemList from '../components/ItemList'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { categoria } = useParams()
    console.log({ categoria })

    useEffect(() => {
        if(categoria===undefined){
            getMocks()
            .then(resp => setItem(resp))
            }
        else{
            getMocks()
            .then(resp => {
                console.log( { resp } )
                setItem(resp.filter(item => item.categoria===categoria))
        })
        }
        },[categoria])

        console.log(categoria);
        
    return (

        <div className="Catalogo">
        <ItemList items={item} />
        </div>

    )

}

export default ItemDetailContainer

