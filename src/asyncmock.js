export const products = [
    { 
        id: '1', 
        name: 'SAMSUNG A22', 
        price: 20000, 
        category: 'celular', 
        img:'https://i.postimg.cc/wMYjHjgY/productos31-3402.png', 
        stock: 25, 
        description:'CELULAR SAMSUNG A22 DE GRAN CALIDAD',
        initial: 1
    },
    { 
        id: '2', 
        name: 'NOTEBOOK APPLE MAC 1', 
        price: 6000, 
        category: 'notebook', 
        img:'https://i.postimg.cc/59wP4cbN/98b6bba1667ed60b7fa48b8e91b17cc4-netbook-notebook-laptop-screen-illustration.png', 
        stock: 16, 
        description:'NOTEBOOK DE GRAN CALIDAD',
        initial: 1
    },
    {   
        id: '3', 
        name: 'TV SMART AOC', 
        price: 100000, 
        category: 'televisores', 
        img:'https://i.postimg.cc/7hBQM7BY/productos31-5952.png', 
        stock: 10, 
        description:'SMART TV AOC 5O PULGADAS',
        initial: 1
    },
    {   
        id: '4', 
        name: 'IPHONE 13', 
        price: 600000, 
        category: 'celular', 
        img:'https://i.postimg.cc/yd1kSN2h/AP-MLQ63-QLA.png', 
        stock: 10, 
        description:'CELULAR IMPORTADO',
        initial: 1
    }
  ]

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
  }
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
  }

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
  }