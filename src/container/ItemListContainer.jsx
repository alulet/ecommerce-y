const item = [

    {id:'1', categoria: 'Remeras', nombre: 'Remera', precio : 4600 , image: '../assets/img/remera.png' , desc : 'Remera 100% Algodon'  },
    {id:'2', categoria: 'Pantalon', nombre: 'Pantalon', precio: 3800, image: '../assets/img/pantalon.png', desc: 'Jean Chupin Lavado bleach '},
    {id:'3', categoria: 'Zapatillas', nombre: 'Zapatilla', precio: 5500, image: '../assets/img/zapas.png', desc: 'Zapatillas Violetas Gamecourt' }, 
    {id:'4', categoria: 'Remeras', nombre: 'Remera', precio : 4600 , image: '../assets/img/remera1.png' , desc : 'Remera dry fit'  },
    {id:'5', categoria:'Pantalon', nombre: 'Pantalon', precio: 3800, image: '../assets/img/pantalon1.png', desc: 'Jean Chupin Azul  '},
    {id:'6', categoria: 'Zapatillas', nombre: 'Zapatilla', precio: 5500, image: '../assets/img/zapas1.png', desc: 'Zapatillas xS Gamecourt' }, 

]

const task = new Promise((res)=>{
        res(item)
},2000)


export const getMocks=()=>{
    return(task)
    
}
