import React, { useState, useEffect } from 'react';
import Item from './Item'


const getPromiseTask=()=>{
    return task

}
const items = [
    {id:1, nombre: 'Alfajor1'},
    {id:2, nombre: 'Alfajor2'},
    {id:3, nombre: 'Alfajor3'},

]

const task = new Promise((resuelto,rechazado)=>{
    let status=200
    if(status===200){
        
          setTimeout(()=>{resuelto(items)},2000) // 3000ms -- 3 segun
               } else {
                rechazado('rechazado')}

   })


const ItemList = (props) =>  {
 const [productos, setProductos] = useState([]) 
    useEffect(() => {
        getPromiseTask()
        .then((resp)=> {
            console.log({resp})
            setProductos(resp)})
        .catch(err=> {console.log('un error')})
    }, [] );


    return(
        <div>  
             {productos.map(producto => <Item key={producto.id} nombre={producto.nombre} id={producto.id} /> )}
        </div>
        
    
    )


}

export default ItemList