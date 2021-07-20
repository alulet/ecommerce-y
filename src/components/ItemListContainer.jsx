import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'

const handleCount=(cant)=>{
    alert(`ud ha agregado : ${cant}`)

}

function ItemListContainer() {
    
    

    return (
        <div> 
            <ItemList /> 
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
        </div>
        
    )


}
// const ItemListContainer = (props) => {
//     return (
//             <div>
//                 <h2>{props.nombre}</h2>
//             </div>
//             );
//   } 

export default ItemListContainer;