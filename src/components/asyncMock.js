const products = [
    {
        id: '1', 
        name: 'PhiladelfiaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "..public/img/PhiladelfiaRoll.PNG", 
        stock: 15, 
        description:'---'
    },
    { 
        id: '2',
        name: 'HuancainaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "../public/img/huancainaRoll.PNG", 
        stock: 15, 
        description:'---'
    },
    {
        id: '3', 
        name: 'HawaiRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "../public/img/HawaiRoll.PNG", 
        stock: 10, 
        description:'---'
},
{ 
        id: '4', 
        name: 'CordobaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "../public/img/CordobaRoll.PNG", 
        stock: 10, 
        description:'---'
},
{ 
        id: '5', 
        name: 'Combinado Sushi Cordoba 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "../public/img/CombinadoSushiCordoba15p.PNG", 
        stock: 20, 
        description:'---'
},
{
        id: '6', 
        name: 'Combinado Blue Sea 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "../public/img/CombinadoBlueSea15p.PNG", 
        stock: 15, 
        description:'---'
},
{
        id: '7', 
        name: 'Combinado Roll & Roll 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "../public/img/CombinadoRoll&Roll30p.PNG", 
        stock: 10, 
        description:'---'
},
{
        id: '8', 
        name: 'Combinado Intense 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "../public/img/CombinadoIntense30p.PNG", 
        stock: 15, 
        description:'---'  
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
    
