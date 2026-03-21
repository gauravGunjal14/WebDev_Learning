const Auth = require("./middleware/Auth");

const foods = [
  { id: 1, name: "Paneer Butter Masala", type: "veg", price: 250 },
  { id: 2, name: "Chicken Biryani", type: "nonveg", price: 300 },
  { id: 3, name: "Masala Dosa", type: "veg", price: 120 },
  { id: 4, name: "Egg Curry", type: "nonveg", price: 180 },
  { id: 5, name: "Veg Pulao", type: "veg", price: 150 },
  { id: 6, name: "Butter Chicken", type: "nonveg", price: 320 },
  { id: 7, name: "Chole Bhature", type: "veg", price: 140 },
  { id: 8, name: "Fish Fry", type: "nonveg", price: 280 },
  { id: 9, name: "Dal Tadka", type: "veg", price: 130 },
  { id: 10, name: "Mutton Curry", type: "nonveg", price: 350 }
];


const express = require("express");
const app = express();

app.use(express.json());

app.get("/admin", Auth, (req, res) =>{
    res.send(foods);
})

app.get("/admin/:id", Auth, (req, res) => {
    const id = parseInt(req.params.id);
    const food = foods.find((f) => f.id === id);
    if (food) {
        res.send(food);
    } else {
        res.status(404).send({ message: "Food item not found" });
    }
});

app.get("/user", (req, res) => {
    res.send(foods);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});