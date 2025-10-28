import React, { useState, useMemo, useCallback } from "react";

// Fibonacci number

// ither using use call back we write it outside the component
// it dosen't run again and again
// function Fibonacci(n) {
//     if (n <= 1)
//         return n;

//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState("");

    const Fibonacci = useCallback((n)=> {
        if (n <= 1)
            return n;

        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }, []);

    const result = useMemo(() => Fibonacci(number), [number]);
    console.log(result)
    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <div>
                <h2>Fibonacci Number is: {result}</h2>
                <input type="number" value={number} min={0} max={30} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
        </>
    )
}

export default App;