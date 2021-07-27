const item = [

    {id:'assad', nombre: 'Remera XL', precio : 4600 , image: '../assets/img/remera.png' , desc : '100% Algodon'  },
    {id:'lele', nombre: 'Pantalon Chupin', precio: 3800, image: '../assets/img/pantalon.png', desc: 'Jean Chupin Lavado bleach '},
    {id:'asdqwr', nombre: 'Zapatilla Deportiva', precio: 5500, image: '../assets/img/zapas.png', desc: 'Gamecourt' },

]

const task = new Promise((res)=>{
        res(item)
},2000)


export const getMocks=()=>{
    return(task)
    
}
