import React from "react";
import { createRoot } from "react-dom/client";

import LogoImg from "./foodFireLogo.png";
/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

//1. Header Component
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LogoImg}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}; 

const resList = [
  {
    id: "1001",
    name: "Domino's Pizza",
    recipe: "Pizza Making",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "22 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bz9zkh2aqywjhpankb07 ",
  },
  {
    id: "1002",
    name: "The Brooklyn Creamery",
    recipe: "Healthy Ice Cream",
    rating: "4.5",
    price: "₹400 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ldtibwymvzehvmdwl8la",
  },
  {
    id: "1003",
    name: "Richie Rich Juices & Shakes",
    recipe: "Ice Cream",
    rating: "4.5",
    price: "₹560 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nyp7yrzwc1dc2xqfkydk",
  },
  {
    id: "1004",
    name: "Pizza Pie",
    recipe: "Pizzas",
    rating: "4.6",
    price: "₹120 for two",
    deliveryTime: "18 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bvr70adr30ejyr5ua79k",
  },
  {
    id: "1005",
    name: "Feeling Hungry",
    recipe: "Biryani",
    rating: "4.4",
    price: "₹150 for two",
    deliveryTime: "21 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/oxsb5mr1xsmhnxhunjsc",
  },
  {
    id: "1006",
    name: "Dessert House",
    recipe: "Desserts",
    rating: "4.1",
    price: "₹300 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jegpumsjcmomksbr2sxr",
  },
  {
    id: "1007",
    name: "McDonald's Gourmet Burger",
    recipe: "Beverages",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzbo5xivr8hstl0vxzcm",
  },
];

//2. Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="res-search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

//3. Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={resData.image} />
      <h3>{resData.name}</h3>
      <h4>{resData.recipe}</h4>
      <h4>{resData.rating}</h4>
      <h4>{resData.deliveryTime}</h4>
      <h4>{resData.price}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
