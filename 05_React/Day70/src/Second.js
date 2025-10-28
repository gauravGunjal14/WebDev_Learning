import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Second() {
    const [count, setCount] = useState(0)
    const money = useRef(0)

    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>

            <h1>Money is: {money.current}</h1>
            <button onClick={() => { money.current = money.current + 1 
                console.log(money.current)
            }}>Increment</button>
        </>
    )
}

export default Second;