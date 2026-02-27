export const Products =
    [
        {
          id: "1",
          name: "iPhone 14 Pro",
          price: 999,
          category: "Electronics",
          description: "A premium smartphone with advanced camera system and powerful performance."
        },
        {
          id: "2",
          name: "Samsung Galaxy S23",
          price: 899,
          category: "Electronics",
          description: "A flagship Android phone with stunning display and excellent battery life."
        },
        {
          id: "3",
          name: "Nike Air Max 270",
          price: 150,
          category: "Fashion",
          description: "Comfortable and stylish sneakers perfect for everyday wear."
        },
        {
          id: "4",
          name: "Adidas Hoodie",
          price: 80,
          category: "Fashion",
          description: "Warm and cozy hoodie with a modern sporty design."
        },
        {
          id: "5",
          name: "MacBook Air M2",
          price: 1200,
          category: "Computers",
          description: "Lightweight laptop with powerful performance and long battery life."
        },
        {
          id: "6",
          name: "Dell XPS 13",
          price: 1100,
          category: "Computers",
          description: "Premium ultrabook with sleek design and high-resolution display."
        },
        {
          id: "7",
          name: "Sony WH-1000XM5",
          price: 350,
          category: "Accessories",
          description: "Industry-leading noise canceling headphones with superior sound quality."
        },
        {
          id: "8",
          name: "Apple Watch Series 9",
          price: 450,
          category: "Accessories",
          description: "Smartwatch with health tracking features and seamless iPhone integration."
        }
      ];
export function getProducts(id){
    return Products.find((p) => p.id === id)

}
