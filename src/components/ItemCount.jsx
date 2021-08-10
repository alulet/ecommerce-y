import React, {useState} from 'react'
import { Link } from 'react-router-dom';

  function ItemCount({initial,stock,itemId,onAdd}) {
      const [cantidad, setCantidad] = useState(initial);
      const [pulsado, setPulsado] = useState(false)
      const handleAdd=()=>{
            if (cantidad<stock){
              setCantidad(cantidad+1)

            }

        }
      const handleRemove=()=>{
            if (cantidad>initial){
              setCantidad(cantidad-1)

          }}

      const handleOnAdd=()=>{
            onAdd(cantidad)
            setPulsado(true)
            
      }

            
  
    
      return (

        <div className={'card text-center w-50'}>
          
            <div className={'card-body'}> 
            <button onClick={handleRemove}> - </button>
            <label className={'alert alert-white'}> {cantidad} </label>
            <button onClick={handleAdd}> + </button>
            { pulsado ? 
            <Link to={`/cart`} className="btn btn-success"> Ir a Cart </Link>:
            <button className={'btn btn-success btn-xs btn-block'} onClick={handleOnAdd}> Add to Cart </button>}
            </div>
            </div>
            )
  };


    

  export default ItemCount;


