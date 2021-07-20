import React from 'react'


const getPromiseTask=()=>{
    return task

}

const task = new Promise((resuelto,rechazado)=>{
    let status=200
    if(status===200){

          setTimeout(()=>{resuelto(items)},3000) // 3000ms -- 3 segun
               } else {
                rechazado('rechazado')}

   })

getPromiseTask()
.then((resp)=> setItemList(resp))
.catch(err=> {console.log('un error')})




export default Promises;
