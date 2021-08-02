import React, {useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { Link } from 'react-router-dom';
// import {CartContext} from '../components/context/CartContext'


const ItemList=({items}) => {


    const [basket, setBasket] = useState([])
    const handleAddToBasket=(id,cantidad)=>{
        setBasket([...basket, {id,cantidad}])
        
        console.log(basket)
        }

    return (
        <div>
        {basket.length>0 && <Link className='boton'to="/cart"> Finalizar Compra </Link> }
        {items.map(i => <ItemDetail key={i.id} nombre={i.nombre} precio={i.precio} image={i.image} id={i.id} desc={i.desc} onAdd={handleAddToBasket} /> )}
        </div>
    
    )}


export default ItemList;