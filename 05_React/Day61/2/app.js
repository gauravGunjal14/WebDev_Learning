import React from "react";
import ReactDOM from "react-dom/client";

function Greet(props) {
  return <h1>Hello {props.name}, age {props.age}</h1>;
}

// root.render(greet("Gaurav"));
const elem2 = <Greet name="Gaurav" age="22"/>;

root.render(elem2);