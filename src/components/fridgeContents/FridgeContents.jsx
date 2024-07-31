import React from "react";

const foodItems = [
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Avocado",
    expiration: "Expiring today",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Cucumber",
    expiration: "1 day left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Cherries",
    expiration: "1 day left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Milk",
    expiration: "2 days left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Juice",
    expiration: "3 days left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Apples",
    expiration: "3 days left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Beef",
    expiration: "3 days left",
  },
  {
    image: "/images/fridge-contents/avocado.jpg",
    name: "Yogurt",
    expiration: "4 days left",
  },
];

const FridgeContents = () => {
  return (
    <div className="fridge-contents-page">
      <h1>Food List</h1>
      <ul className="food-list">
        {foodItems.map((item, index) => (
          <li key={index} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>{item.expiration}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FridgeContents;
