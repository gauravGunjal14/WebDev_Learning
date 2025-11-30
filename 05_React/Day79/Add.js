import { useState } from "react";

export default function Add({ value }) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{value}: {count}</h1>
            <button style={{width: "100px", height: "40px" }}
            onClick={() => setCount(count + 1)}>Vote</button>
        </div>
    );
}