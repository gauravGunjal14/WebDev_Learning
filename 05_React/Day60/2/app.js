import React from "react";
import ReactDOM from "react-dom/client";

let obj = {
    backgroundColor: "red",
    color: "white"
}
const name = "Gaurav";
const div1 = (
    <>
        <h1 id="first" className="header">Hello {name}</h1>
        <h2 style={obj}>Hii</h2>
    </>
);

function greet(){
    return <h1>Hello {name}</h1>
}

function greet2(){
    return <h1>Hii {name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    {greet()}
    {greet2()}
    </>
);