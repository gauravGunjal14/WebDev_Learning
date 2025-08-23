import React from "react";
import ReactDOM from "react-dom/client";
import shirtImg from "./assets/Shirt.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
const items = [
    { name: "Shirt", discount: "20-80% OFF", image: shirtImg },
    { name: "Pants", discount: "50-60% OFF", image: shirtImg },
    { name: "Shoes", discount: "10-50% OFF", image: shirtImg },
    { name: "Ethnic Wear", discount: "50-80% OFF", image: shirtImg },
    { name: "WFH Casual Wear", discount: "40-60% OFF", image: shirtImg },
    { name: "Activeware", discount: "30-70% OFF", image: shirtImg },
    { name: "Western Wear", discount: "40-80% OFF", image: shirtImg },
    { name: "Sportwear", discount: "30-80% OFF", image: shirtImg },
    { name: "Loungewear", discount: "30-60% OFF", image: shirtImg },
    { name: "Watches", discount: "UP TO 80% OFF", image: shirtImg },
    { name: "Grooming", discount: "UP TO 60% OFF", image: shirtImg },
    { name: "Beauty & Makeup", discount: "UP TO 60% OFF", image: shirtImg },
    { name: "Kids Wear", discount: "50-70% OFF", image: shirtImg },
    { name: "Footwear", discount: "50-70% OFF", image: shirtImg },
    { name: "Footwear", discount: "40-80% OFF", image: shirtImg },
    { name: "Bags, Belts & Wallets", discount: "40-70% OFF", image: shirtImg },
    { name: "Office Wear", discount: "40-70% OFF", image: shirtImg },
    { name: "Sunglasses", discount: "30-70% OFF", image: shirtImg },
    { name: "Jewellery", discount: "20-60% OFF", image: shirtImg },
    { name: "Winter Wear", discount: "40-80% OFF", image: shirtImg },
    { name: "Casual Jackets", discount: "30-70% OFF", image: shirtImg },
    { name: "Formal Suits", discount: "50-75% OFF", image: shirtImg },
    { name: "Denim Collection", discount: "40-80% OFF", image: shirtImg },
    { name: "T-Shirts", discount: "30-70% OFF", image: shirtImg },
    { name: "Handbags", discount: "35-65% OFF", image: shirtImg },
    { name: "Travel Trolleys", discount: "40-70% OFF", image: shirtImg },
    { name: "Perfumes", discount: "UP TO 50% OFF", image: shirtImg },
    { name: "Hats & Caps", discount: "20-60% OFF", image: shirtImg },
    { name: "Scarves & Stoles", discount: "30-70% OFF", image: shirtImg },
    { name: "Swimwear", discount: "25-60% OFF", image: shirtImg },
    { name: "Sleepwear", discount: "30-65% OFF", image: shirtImg },
    { name: "Accessories Combo", discount: "UP TO 55% OFF", image: shirtImg },
]

function Card({ name, discount, image }) {
  return (
    <div id="card">
      <img src={image} alt={name} width="150" />
      <h1>{name}</h1>
      <h2>{discount}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <div className="card-container">
        {items.map((value, index) => (
          <Card key={index} name={value.name} discount={value.discount} image={value.image} />
        ))}
      </div>
    </div>
  );
}

export default App;