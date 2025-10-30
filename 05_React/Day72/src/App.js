import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import GlobalContext from "./Global"

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalContext.Provider value={{ count, setCount }}>
                <h1>Counter is {count}</h1>
                <Increment></Increment>
            </GlobalContext.Provider>
        </>
    )
}

export default App;