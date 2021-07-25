import React, {useState} from 'react'
// import Item from './Item';

  function ItemCount({initial,stock, onAdd}) {
      const [cantidad, setCantidad] = useState(initial);
      const handleAdd=()=>{
            if (cantidad<stock){
              setCantidad(cantidad+1)

            }

        }
      const handleRemove=()=>{
            if (cantidad>initial){
              setCantidad(cantidad-1)

          }

          
        }
  
    
      return (

        <div className={'card text-center w-50'}>
          
            <div className={'card-body'}> 
            <button onClick={handleRemove}> - </button>
            <label className={'alert alert-white'}> {cantidad} </label>
            <button onClick={handleAdd}> + </button>
            <button className={'btn btn-primary btn-block'} onClick={()=>onAdd(cantidad)}> Add to Cart </button>
          </div>
          </div>
            )
  };


    

  export default ItemCount;


