const products=[
  {
    _id: "1",
    name: "Pepsi",
    image: "https://www.superseis.com.py/images/thumbs/0243910.jpeg",
    description:"Refresco Pepsi con sabor a cola, 500ml.",
    price: 2500,
    stock: 0,
    rating: 2,
    numReviews: 6
  },
  {
    _id: "2",
    name: "Pepsi",
    image: "https://www.superseis.com.py/images/thumbs/0251369.jpeg",
    description:"Refresco Pepsi con sabor a cola, 1l.",
    price: 6000,
    stock: 0,
    rating: 2,
    numReviews: 6
  },
  {
    _id: "3",
    name: "Coca Cola",
    image: "https://www.superseis.com.py/images/thumbs/0209901.png",
    description:"Refresco Coca Cola, 600ml.",
    price: 6000,
    stock: 140,
    rating: 1,
    numReviews: 9
  },
  {
    _id: "4",
    name: "Coca Cola",
    image: "https://www.superseis.com.py/images/thumbs/0211517.png",
    description:"Refresco Coca Cola, 1.5l.",
    price: 12000,
    stock: 0,
    rating: 2,
    numReviews: 6
  },
  {
    _id: "5",
    name: "Vino Santa Helena",
    image: "https://www.superseis.com.py/images/thumbs/0215504.jpeg",
    description:"Vino tinto Santa Helena, 750ml.",
    price: 25500,
    stock: 140,
    rating: 1,
    numReviews: 9
  },
  {
    _id: "6",
      name: "Vino Santa Helena",
      image: "https://www.superseis.com.py/images/thumbs/0215503.jpeg",
      description:"Vino blanco Santa Helena, 750ml.",
      price: 25500,
      stock: 140,
      rating: 1,
      numReviews: 9
    },
  {
    _id: "7",
    name: "Sidra",
    image: "https://www.superseis.com.py/images/thumbs/0216016.jpeg",
    description:"Sidra espumante de frutilla Cereser, 660ml.",
    price: 20000,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },
  {
    _id: "8",
    name: "Sidra",
    image: "https://grutteronline.casagrutter.com.py/wp-content/uploads/imagenes/7791305600035.jpg",
    description:"Sidra de manzana La Preferida, 910cc.",
    price: 19000,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },
  {
    _id: "9",
    name: "Smirnoff Botella",
    image: "https://www.superseis.com.py/images/thumbs/0225633.jpeg",
    description:"Vodka limón Smirnoff Ice botella, 275ml.",
    price: 8500,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },
  {
    _id: "10",
    name: "Smirnoff Lata",
    image: "https://www.superseis.com.py/images/thumbs/0225755.jpeg",
    description:"Vodka limón Smirnoff Ice lata, 269ml.",
    price: 7500,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },

  {
    _id: "11",
    name: "Munich Botella",
    image: "https://www.superseis.com.py/images/thumbs/0252383.jpeg",
    description:"Cerveza Royal Munich botella no retornable, 330ml.",
    price: 3000,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },
  {
    _id: "12",
    name: "Munich Lata",
    image: "https://www.superseis.com.py/images/thumbs/0254392.jpeg",
    description:"Cerveza Royal Munich lata, 269cc.",
    price: 3000,
    stock: 140,
    rating: 4.5,
    numReviews: 4
  },
  {
    _id: "13",
    name: "Chocottone Bauducco",
    image: "https://www.superseis.com.py/images/thumbs/0247965.jpeg",
    description:"mini Chocottone BAUDUCCO, 125gr.",
    price: 12500,
    stock: 140,
    rating: 3.5,
    numReviews: 10
  },
  {
    _id: "14",
    name: "Panettone Bauducco",
    image: "https://www.superseis.com.py/images/thumbs/0239107.jpeg",
    description:"Panettone con frutas BAUDUCCO, 400gr.",
    price: 24900,
    stock: 140,
    rating: 3.5,
    numReviews: 10
  },
  {
    _id: "15",
    name: "Nutella",
    image: "https://www.superseis.com.py/images/thumbs/0222355.jpeg",
    description:"Pasta dulce con avellanas y cacao, pote 140gr.",
    price: 29700,
    stock: 140,
    rating: 2,
    numReviews: 12
  },
  {
    _id: "16",
    name: "Nutella",
    image: "https://www.superseis.com.py/images/thumbs/0217405.jpeg",
    description:"Pasta dulce con avellanas y cacao, pote 350gr.",
    price: 54800,
    stock: 140,
    rating: 2,
    numReviews: 12
  },
  {
    _id: "17",    
    name: "Galletas Oreo",
    image: "https://www.superseis.com.py/images/thumbs/0252136.jpeg",
    description:"Galletas Oreo sabor chocolate y vainilla, 118gr.",
    price: 6500,
    stock: 140,
    rating: 5,
    numReviews: 8
  },
  {
    _id: "18", 
    name: "Galletas Mini Oreo",
    image: "https://www.superseis.com.py/images/thumbs/0249240.jpeg",
    description:"Galletas Mini Oreo sabor chocolate y vainilla, 50gr.",
    price: 3500,
    stock: 140,
    rating: 5,
    numReviews: 8
  },

  {
    _id: "19",
    name: "Chocolate Milka",
    image: "https://www.superseis.com.py/images/thumbs/0215432.jpeg",
    description:"Chocolate en tableta Milka Oreo blanco, 20gr.",
    price: 3850,
    stock: 140,
    rating: 4,
    numReviews: 6
  },  
  {
    _id: "20",
    name: "Alfajor Milka",
    image: "https://www.superseis.com.py/images/thumbs/0215441.jpeg",
    description:"Alfajor Milka OREO, 61gr.",
    price: 7100,
    stock: 140,
    rating: 5,
    numReviews: 8
  },
  {
    _id: "21",
    name: "Alfajor Negro",
    image: "https://www.superseis.com.py/images/thumbs/0221796.jpeg",
    description:"Alfajor bon o bon negro, 60gr.",
    price: 3500,
    stock: 140,
    rating: 3.5,
    numReviews: 3
  },
  {
    _id: "22",
    name: "Alfajor Blanco",
    image: "https://www.superseis.com.py/images/thumbs/0221795.jpeg",
    description:"Alfajor bon o bon blanco, 40gr.",
    price: 3500,
    stock: 140,
    rating: 1,
    numReviews: 6
  },
  {
    _id: "23",
    name: "SNICKERS",
    image: "https://www.superseis.com.py/images/thumbs/0247280.png",
    description:"Chocolate en barra SNICKERS, 45gr.",
    price: 7000,
    stock: 140,
    rating: 4,
    numReviews: 6
  },
  {
    _id: "24",
    name: "ROCKLETS",
    image: "https://www.superseis.com.py/images/thumbs/0215631.jpeg",
    description:"Chocolate confitado Arcor ROCKLETS, 40gr.",
    price: 3200,
    stock: 140,
    rating: 4,
    numReviews: 6
  },
  {
    _id: "25",
    name: "Cereal Mix",
    image: "https://www.superseis.com.py/images/thumbs/0253108.jpeg",
    description:"Barra de Cereal Mix con frutilla y chocolate, 26gr.",
    price: 4000,
    stock: 140,
    rating: 5,
    numReviews: 0
  },
  {
    _id: "25",
    name: "Cereal Mix",
    image: "https://www.superseis.com.py/images/thumbs/0226205.jpeg",
    description:"Barra de Cereal Mix Arcor Original, 23gr.",
    price: 3000,
    stock: 140,
    rating: 5,
    numReviews: 0
  },

  {
    _id: "27",
    name: "Taza Negra",
    image: "https://www.superseis.com.py/images/thumbs/0230532.jpeg",
    description:"Taza de cerámica color negro, 320ml.",
    price: 9900,
    stock: 140,
    rating: 4.5,
    numReviews: 12
  },
  {
    _id: "28",
    name: "Taza Blanca",
    image: "https://www.superseis.com.py/images/thumbs/0223837.jpeg",
    description:"Taza de cerámica color blanco, 320ml.",
    price: 9900,
    stock: 140,
    rating: 4,
    numReviews: 7
  },
  
]
export default products;
