import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const items = [
    { name: "Shirt", discount: "20-80% OFF", image: "/images/Shirt.jpg" },
    { name: "Pants", price: "50-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Shoes", price: "10-50% OFF", image: "/images/Shirt.jpg" },
    { name: "Ethnic Wear", discount: "50-80% OFF", image: "/images/Shirt.jpg" },
    { name: "WFH Casual Wear", price: "40-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Activeware", price: "30-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Western Wear", discount: "40-80% OFF", image: "/images/Shirt.jpg" },
    { name: "Sportwear", price: "30-80% OFF", image: "/images/Shirt.jpg" },
    { name: "Loungewear", price: "30-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Watches", discount: "UP TO 80% OFF", image: "/images/Shirt.jpg" },
    { name: "Grooming", price: "UP TO 60% OFF", image: "/images/Shirt.jpg" },
    { name: "Beauty & Makeup", price: "UP TO 60% OFF", image: "/images/Shirt.jpg" },
    { name: "Kids Wear", discount: "50-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Footwear", price: "50-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Footwear", price: "40-80% OFF", image: "/images/Shirt.jpg" },
    { name: "Bags, Belts & Wallets", discount: "40-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Office Wear", price: "40-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Sunglasses", discount: "30-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Jewellery", price: "20-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Winter Wear", discount: "40-80% OFF", image: "/images/Shirt.jpg" },
    { name: "Casual Jackets", price: "30-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Formal Suits", discount: "50-75% OFF", image: "/images/Shirt.jpg" },
    { name: "Denim Collection", price: "40-80% OFF", image: "/images/Shirt.jpg" },
    { name: "T-Shirts", discount: "30-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Handbags", price: "35-65% OFF", image: "/images/Shirt.jpg" },
    { name: "Travel Trolleys", discount: "40-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Perfumes", price: "UP TO 50% OFF", image: "/images/Shirt.jpg" },
    { name: "Hats & Caps", discount: "20-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Scarves & Stoles", price: "30-70% OFF", image: "/images/Shirt.jpg" },
    { name: "Swimwear", discount: "25-60% OFF", image: "/images/Shirt.jpg" },
    { name: "Sleepwear", price: "30-65% OFF", image: "/images/Shirt.jpg" },
    { name: "Accessories Combo", discount: "UP TO 55% OFF", image: "/images/Shirt.jpg" },
]

function Card({ name, discount, image }) {
  return (
    <div border= "2px solid black">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>{discount}</p>
    </div>
  );
}

function App() {
  return (
    <div display = "flex">
      {items.map((value, index) => (
        <Card key={index} name={value.name} discount={value.discount} image={value.image} />
      ))}
    </div>
  );
}

root.render(<App />);