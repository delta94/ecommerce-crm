import {
  SET_NAVBAR_LINKS /*SET_SHOP_CATEGORIES */,
  SET_SHOP_PRODUCTS,
} from "./types";
export function fetchShopCategories() {
  return {
    type: SET_NAVBAR_LINKS,
    payload: [
      {
        _id: 0,
        title: "All",
      },
      {
        _id: 1,
        title: "JavaScript",
      },
      {
        _id: 2,
        title: "UI/UX",
      },
      {
        _id: 3,
        title: "Linux",
      },
      {
        _id: 4,
        title: "Python",
      },
      {
        _id: 5,
        title: "UML",
      },
      {
        _id: 6,
        title: "Ruby",
      },
    ],
  };
}


export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 1,
        title: "JavaScript in the Browser",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 2,
        title: "Graph Database",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
      },
      {
        _id: 3,
        title: "Fullstack Development",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 1, 4],
      },
      {
        _id: 4,
        title: "JavaScript Development",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 5,
        title: "UI Design",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 2],
      },
      {
        _id: 6,
        title: "Advanced OOP",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illum optio omnis quidem. Laudantium harum voluptatibus expedita iste accusamus quasi sunt nihil adipisci voluptatem fugiat temporibus, voluptas libero ea debitis",
        price: 1.99,
        belongsTo: [0, 6],
      },
    ],
  };
}