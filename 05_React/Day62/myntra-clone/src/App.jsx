import React from "react";
import ReactDOM from "react-dom/client";
import shirtImg from "./assets/Shirt.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
const items = [
    { name: "Shirt", discount: "20-80% OFF", image: shirtImg },
    { name: "Pants", price: "50-60% OFF", image: shirtImg },
    { name: "Shoes", price: "10-50% OFF", image: shirtImg },
    { name: "Ethnic Wear", discount: "50-80% OFF", image: shirtImg },
    { name: "WFH Casual Wear", price: "40-60% OFF", image: shirtImg },
    { name: "Activeware", price: "30-70% OFF", image: shirtImg },
    { name: "Western Wear", discount: "40-80% OFF", image: shirtImg },
    { name: "Sportwear", price: "30-80% OFF", image: shirtImg },
    { name: "Loungewear", price: "30-60% OFF", image: shirtImg },
    { name: "Watches", discount: "UP TO 80% OFF", image: shirtImg },
    { name: "Grooming", price: "UP TO 60% OFF", image: shirtImg },
    { name: "Beauty & Makeup", price: "UP TO 60% OFF", image: shirtImg },
    { name: "Kids Wear", discount: "50-70% OFF", image: shirtImg },
    { name: "Footwear", price: "50-70% OFF", image: shirtImg },
    { name: "Footwear", price: "40-80% OFF", image: shirtImg },
    { name: "Bags, Belts & Wallets", discount: "40-70% OFF", image: shirtImg },
    { name: "Office Wear", price: "40-70% OFF", image: shirtImg },
    { name: "Sunglasses", discount: "30-70% OFF", image: shirtImg },
    { name: "Jewellery", price: "20-60% OFF", image: shirtImg },
    { name: "Winter Wear", discount: "40-80% OFF", image: shirtImg },
    { name: "Casual Jackets", price: "30-70% OFF", image: shirtImg },
    { name: "Formal Suits", discount: "50-75% OFF", image: shirtImg },
    { name: "Denim Collection", price: "40-80% OFF", image: shirtImg },
    { name: "T-Shirts", discount: "30-70% OFF", image: shirtImg },
    { name: "Handbags", price: "35-65% OFF", image: shirtImg },
    { name: "Travel Trolleys", discount: "40-70% OFF", image: shirtImg },
    { name: "Perfumes", price: "UP TO 50% OFF", image: shirtImg },
    { name: "Hats & Caps", discount: "20-60% OFF", image: shirtImg },
    { name: "Scarves & Stoles", price: "30-70% OFF", image: shirtImg },
    { name: "Swimwear", discount: "25-60% OFF", image: shirtImg },
    { name: "Sleepwear", price: "30-65% OFF", image: "c" },
    { name: "Accessories Combo", discount: "UP TO 55% OFF", image: shirtImg },
]

function Card({ name, discount, image }) {
  return (
    <div id="card">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>{discount}</p>
    </div>
  );
}

function App() {
  return (
    <div className="card-container">
      {items.map((value, index) => (
        <Card key={index} name={value.name} discount={value.discount} image={value.image} />
      ))}
    </div>
  );
}

export default App;