const item = [

    {id:1, nombre: 'Remera XL', precio : 4600 , image: '../assets/img/remera.png'},
    {id:2, nombre: 'Pantalones Chupines', precio: 3800, image: '../assets/img/pantalon.png'},
    {id:3, nombre: 'Zapatillas Deportivas', precio: 5500, image: '../assets/img/zapas.png'},

]

const task = new Promise((res)=>{
        res(item)
},2000)


export const getMocks=()=>{
    return(task)
    
}
