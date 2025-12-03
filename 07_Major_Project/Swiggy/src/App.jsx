import "./index.css";
import Header from "./components/Header.jsx";
import Food from "./components/Food.jsx";
import Groceries from "./Components/Groceries.jsx"

export default function App() {
    return (
        <div className="font-serif">
            <Header></Header>
            <Food></Food>
            <Groceries></Groceries>
            <Restaurants></Restaurants>
        </div>
    );
}