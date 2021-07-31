import React, {useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { Link } from 'react-router-dom';


const ItemList=({items}) => {

    const [basket, setBasket] = useState([])

    const handleAddToBasket=(id,cantidad)=>{
        setBasket([...basket, {id,cantidad}])
        // let basketTemp = basket
        // basketTemp.push({id,cantidad})
        // setBasket(basketTemp)

        console.log(basket)
        }

    return (
        <div>
        {basket.length>0 && <Link to="/cart"> Finalizar Compra </Link> }
        {items.map(i => <ItemDetail key={i.id} nombre={i.nombre} precio={i.precio} image={i.image} id={i.id} desc={i.desc} onAdd={handleAddToBasket} /> )}
        </div>
    
    )}


export default ItemList;