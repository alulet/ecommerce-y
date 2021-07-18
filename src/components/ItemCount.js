import React, { useState, useEffect } from 'react';

function ItemCount(props) {
  const [itemCount, setCount] = useState(1);
  const stock = props.stock;
    
function ValidarStock(stock){
    console.log(stock)
    console.log(itemCount)

        if(itemCount<stock){
            setCount(itemCount+1)
        }
        else{
            alert('No hay stock disponible')
        }

}
    useEffect(() => {
    
                 });

    return (
    <div>
        <p>Hay en stock {stock} </p>
        <p>Mostrar la cantidad de {itemCount} </p>
      <button onClick={() => {ValidarStock(props.stock);}}> + </button>
      <button onClick={() => {setCount(Math.max(itemCount - 1, 0));}}> - </button>
      <button onClick={() => {alert("Agregado al carrito")}}> AGREGAR AL CARRITO </button>
      
     </div>
  );
  
  };

  export default ItemCount;


//   >> Ejemplo inicial: 
// function ItemCount({ stock, initial}) {
//  // Desarrollar lógica
// }
// - Adicionalmente tendremos un número inicial (initial) de cantidad de ítems, de tal modo que si lo invoco del siguiente modo:
// <ItemCount stock=”5” initial=”1” /> 
// debería ver el contador inicializado en 1 por defecto

