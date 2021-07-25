import React, { useState, useEffect } from 'react'
import { getMocks } from '../servicios/getMocks'
import ItemList from '../components/ItemList'



function ItemDetailContainer() {
    const [item, setItem] = useState([])

    useEffect(() => {
        getMocks()
        .then(resp => setItem(resp))
        },[])


    return (

        <div>
            <ItemList items={item} />
        </div>

    )

}

export default ItemDetailContainer

