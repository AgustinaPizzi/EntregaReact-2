const products = [
  {
    id: "1",
    name: "El cerebro y la inteligencia emocional",
    category: "Bienestar",
    price: 10100,
    stock: 300,
    author: "Daniel Goleman",
    imageUrl:
      "https://tvandshow.files.wordpress.com/2016/08/5189f3286915715b50cff89ddded1008_s.jpg?w=200.",
  },
  {
    id: "2",
    name: "Mujercitas",
    category: "Grandes clásicos",
    price: 26700,
    stock: 52,
    author: "Louisa May Alcott",
    imageUrl:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/4f/d2/4fd231d86c39e5eea08a956eea83b08b.jpg",
  },
  {
    id: "3",
    name: "Anna Karenina",
    category: "Grandes clásicos",
    price: 23000,
    stock: 15,
    author: "Lev Tolstói",
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/42/be/42be3fae8b5074daefa9717ba1d3f983.jpg",
  },
  {
    id: "4",
    name: "Ana de las tejas verdes",
    category: "Grandes clásicos",
    price: 6290,
    stock: 15,
    author: "Lucy Maud Montgomery",
    imageUrl:
      "https://contentv2.tap-commerce.com/cover/large/9789878120409_1.jpg?id_com=1156",
  },
  {
    id: "5",
    name: "Harry Potter y el prisionero de Azkaban",
    category: "Fantasia",
    price: 22090,
    stock: 15,
    author: "J.K Rowling",
    imageUrl:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/1a/31/1a3145c3ba83287fabdb65514b893cf6.jpg",
  },
];

export const mFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
};
