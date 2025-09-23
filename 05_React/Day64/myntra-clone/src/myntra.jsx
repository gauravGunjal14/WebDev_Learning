import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Holding from "./component/Holding";
import Card from "./component/Card";
import items from "./component/Items";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <Header/>
      <div className="main">
        <Holding />
        <div className="card-container">
          {items.map((value, index) => (
            <Card key={index} name={value.name} discount={value.discount} image={value.image} />
          ))}
        </div>
      </div>
    </>
);