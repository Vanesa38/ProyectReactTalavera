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
        description:'Relleno de langostinos y palta, con salmón por fuera, bañado en salsa huancaína, sésamo, cilantro y crocante de batata'
    },
    {
        id: '3', 
        name: 'HawaiRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/HawaiRoll.PNG", 
        stock: 10, 
        description:'Relleno de salmón ahumado y palta, recubierto por tataki de salmón aderezado con merken, bañado con salsa picante y maíz cancha.'
},
{ 
        id: '4', 
        name: 'CordobaRoll', 
        price: 1000, 
        category: 'SushiRoll', 
        img: "/img/CordobaRoll.PNG", 
        stock: 10, 
        description:'Relleno de salmón, langostinos, palta y queso crema, con salmón por fuera y salsa de sésamo.'
},
{ 
        id: '5', 
        name: 'Combinado Cordoba 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoSushiCordoba15p.PNG", 
        stock: 20, 
        description:'Cordoba Roll, Placer Real, Feel Roll, Honey Roll, Philadelphia Roll, Sashimi de Salmón y Niguiri de Salmón.'
},
{
        id: '6', 
        name: 'Combinado Blue Sea 15p', 
        price: 1900, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoBlueSea15p.PNG", 
        stock: 15, 
        description:'Cordoba Roll, Celerity Roll, Feel Roll, Soul Roll, Niguiri Fuego Thai. Incluye salsa'
},
{
        id: '7', 
        name: 'Combinado Roll & Roll 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoRoll&Roll30p.PNG", 
        stock: 10, 
        description:'Placer Real, Soul Roll, Feel Roll, Geishas de Salmón, Futurama Roll, Sweet Roll, SPF Roll.'
},
{
        id: '8', 
        name: 'Combinado Intense 30p', 
        price: 3500, 
        category: 'CombinadoSushi', 
        img: "/img/CombinadoIntense30p.PNG", 
        stock: 15, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
    
