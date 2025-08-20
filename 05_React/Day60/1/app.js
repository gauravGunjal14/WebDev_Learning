import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1", {
    id: "first", className: "header", style: {
        backgroundColor: "blue",
        color: "white",
    }
}, "Hello World!");

const element2 = React.createElement("h2", {
    id: "second", className: "header", style: {
        backgroundColor: "green",
        color: "white",
    }
}, "Hii");

const div1 = React.createElement("div", { id: "div1" },
    React.cloneElement(element, { key: "1" }),
    React.cloneElement(element2, { key: "2" })
);

// ReactDOM.render(element, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);