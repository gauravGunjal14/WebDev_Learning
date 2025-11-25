import { useState } from "react";
import FoodInCart from "./FoodInCart";

const foodItems = [
    { id: 1, name: "Pizza", price: "$10" },
    { id: 2, name: "Burger", price: "$8" },
    { id: 3, name: "Pasta", price: "$12" },
    { id: 4, name: "Salad", price: "$7" },
    { id: 5, name: "Sushi", price: "$15" },
    { id: 6, name: "Tacos", price: "$9" },
    { id: 7, name: "Steak", price: "$20" },
    { id: 8, name: "Ice Cream", price: "$5" },
    { id: 9, name: "Sandwich", price: "$6" },
    { id: 10, name: "Fries", price: "$4" },
];

export default function Card() {

    return (
        <div className="card-container"
        style={{display: "flex", justifyContent: "start", flexWrap: "wrap", gap: "2", margin: "20px"}}>
            {foodItems.map((item) => (
                <div key={item.id} className="card" style={{border: "1px solid black", padding: "10px", margin: "10px", width: "150px", textAlign: "center", boxShadow: "2px 2px 12px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
                    <FoodInCart item={item} />
                </div>
            ))}
        </div>
    );
}