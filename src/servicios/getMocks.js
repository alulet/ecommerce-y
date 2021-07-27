const item = [

    {id:'assad', nombre: 'Remera XL', precio : 4600 , image: '../assets/img/remera.png' },
    {id:'lele', nombre: 'Pantalones Chupines', precio: 3800, image: '../assets/img/pantalon.png'},
    {id:'asdqwr', nombre: 'Zapatillas Deportivas', precio: 5500, image: '../assets/img/zapas.png' },

]

const task = new Promise((res)=>{
        res(item)
},2000)


export const getMocks=()=>{
    return(task)
    
}
