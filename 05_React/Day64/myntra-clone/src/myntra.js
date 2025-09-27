import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Holding from "./component/Holding";
import Card from "./component/Card";
import items from "./component/Items";

function App() {
  const [A, setA] = useState(items);

  const sortByPrice = () => {
    const sorted = [...A].sort((a, b) => a.price - b.price);
    setA(sorted);
  };

  return (
    <>
      <Header />
      <div className="main">
        <Holding />
        <button id="sort" onClick={sortByPrice}>Sort by price</button>
        <div className="card-container">
          {A.map((value, index) => (
            <Card
              key={index}
              name={value.name}
              discount={value.discount}
              image={value.image}
              price={value.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
