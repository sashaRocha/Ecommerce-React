const products = [
    { 
        id: '1', 
        name: 'SAMSUNG A22', 
        price: 20000, 
        category: 'celular', 
        img:'https://i.postimg.cc/wMYjHjgY/productos31-3402.png', 
        stock: 25, 
        description:'CELULAR SAMSUNG A22 DE GRAN CALIDAD'
    },
    { 
        id: '2', 
        name: 'NOTEBOOK LENOVO', 
        price: 6000, 
        category: 'notebook', 
        img:'https://i.postimg.cc/ZYvwMKWK/NOTEBOOK-LENOVO-V15-I7-8-GB-1-TB-FREE-1-Y.jpg', 
        stock: 16, 
        description:'NOTEBOOK DE GRAN CALIDAD'
    },
    {   
        id: '3', 
        name: 'TV SMART AOC', 
        price: 100000, 
        category: 'televisores', 
        img:'https://i.postimg.cc/0QDcrVRK/smart-tv-enxuta-58-ledenx1258sdf4kl-97430-31.jpg', 
        stock: 10, 
        description:'SMART TV AOC 5O PULGADAS'
    },
    {   
        id: '4', 
        name: 'IPHONE 13', 
        price: 600000, 
        category: 'celular', 
        img:'https://i.postimg.cc/yd1kSN2h/AP-MLQ63-QLA.png', 
        stock: 10, 
        description:'CELULAR IMPORTADO'
    }
  ]

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
  }
  