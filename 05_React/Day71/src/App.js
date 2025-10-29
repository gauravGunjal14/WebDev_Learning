import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Parent Counter is {count}</h1>
            {/* <h1>Hello</h1> */}
            {/* <Increment/> */}
            <Increment counts={count} setCounts ={setCount}/>
            <Decrement counts={count} setCounts ={setCount}/>
        </>
    )
}

export default App;