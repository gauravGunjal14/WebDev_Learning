import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function Counter() {
    // let count = 0;
    let [count, setCount] = useState(0);

    function increment() {
        count++;
        setCount(count);
        // console.log(count);
        // document.querySelector("h1").innerText = `Counter is ${count}`;
    }

    function decrement() {
        count--;
        setCount(count);
        // console.log(count);
        // document.querySelector("h1").innerText = `Counter is ${count}`;
    }

    return (
        <div className="counter">
            <h1>Counter is {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);