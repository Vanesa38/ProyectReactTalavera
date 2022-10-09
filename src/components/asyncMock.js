const products = [
    {
        id: '1', 
        name: 'PhiladelfiaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/PhiladelfiaRoll.PNG", 
        stock: 15, 
        description:'Relleno de Salmon y queso crema, con sesamo'
    },
    { 
        id: '2',
        name: 'HuancainaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/huancainaRoll.PNG", 
        stock: 15, 
        description:'---'
    },
    {
        id: '3', 
        name: 'HawaiRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/HawaiRoll.PNG", 
        stock: 10, 
        description:'---'
},
{ 
        id: '4', 
        name: 'CordobaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/CordobaRoll.PNG", 
        stock: 10, 
        description:'---'
},
{ 
        id: '5', 
        name: 'Combinado Cordoba 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoSushiCordoba15p.PNG", 
        stock: 20, 
        description:'---'
},
{
        id: '6', 
        name: 'Combinado Blue Sea 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoBlueSea15p.PNG", 
        stock: 15, 
        description:'---'
},
{
        id: '7', 
        name: 'Combinado Roll & Roll 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoRoll&Roll30p.PNG", 
        stock: 10, 
        description:'---'
},
{
        id: '8', 
        name: 'Combinado Intense 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoIntense30p.PNG", 
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

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}
    
