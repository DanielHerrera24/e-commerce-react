export const products = [
    {
        "id": 1,
        "productName": "Apagador Decora",
        "precio": 65,
        "categoria": "Apagadores",
        "img": "https://cdn.homedepot.com.mx/productos/949663/949663-za3.jpg"
    },
    {
        "id": 2,
        "productName": "Apagador combinado D8",
        "precio": 80,
        "categoria": "Apagadores",
        "img": "https://cdn.homedepot.com.mx/productos/872966/872966-d.jpg"
    },
    {
        "id": 3,
        "productName": "Apagador doble D8 sencillo",
        "precio": 75,
        "categoria": "Apagadores",
        "img": "https://cdn.homedepot.com.mx/productos/949690/949690-d.jpg"
    },
    {
        "id": 4,
        "productName": "Apagador inteligente doble",
        "precio": 270,
        "categoria": "Apagadores",
        "img": "https://cdn.homedepot.com.mx/productos/194498/194498-d.jpg"
    },
    {
        "id": 5,
        "productName": "Caja 2x4",
        "precio": 50,
        "categoria": "Cajas",
        "img": "https://cdn.homedepot.com.mx/productos/198365/198365-a1.jpg"
    },
    {
        "id": 6,
        "productName": "Caja 4x4",
        "precio": 100,
        "categoria": "Cajas",
        "img": "https://cdn.homedepot.com.mx/productos/555710/555710-z.jpg"
    },
    {
        "id": 7,
        "productName": "Caja octagonal",
        "precio": 60,
        "categoria": "Cajas",
        "img": "https://cdn.homedepot.com.mx/productos/199256/199256-d.jpg"
    },
    {
        "id": 8,
        "productName": "Tapa decora doble",
        "precio": 40,
        "categoria": "Tapas",
        "img": "https://cdn.homedepot.com.mx/productos/212731/212731-z.jpg"
    },
    {
        "id": 9,
        "productName": "Tapa doble apagador",
        "precio": 35,
        "categoria": "Tapas",
        "img": "https://lumimaterialelectrico.com/cdn/shop/products/LEV138.jpg?v=1662659129"
    },
    {
        "id": 10,
        "productName": "Tapa doble contacto",
        "precio": 35,
        "categoria": "Tapas",
        "img": "https://cdn.homedepot.com.mx/productos/890412/890412-d.jpg"
    },
    {
        "id": 11,
        "productName": "Foco LED",
        "precio": 40,
        "categoria": "Luces",
        "img": "https://cdn.homedepot.com.mx/productos/126197/126197-d.jpg"
    },
    {
        "id": 12,
        "productName": "Spot LED",
        "precio": 50,
        "categoria": "Luces",
        "img": "https://cdn.homedepot.com.mx/productos/117232/117232-z.jpg"
    },
    {
        "id": 13,
        "productName": "Reflector con sensor",
        "precio": 230,
        "categoria": "Luces",
        "img": "https://cdn.homedepot.com.mx/productos/500500/500500-z.jpg"
    },
    {
        "id": 14,
        "productName": "Tira LED 5m",
        "precio": 280,
        "categoria": "Luces",
        "img": "https://cdn.homedepot.com.mx/productos/174266/174266-d.jpg"
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error('No hay productos'));
      }
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };