import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="font-serif">
            <Header></Header>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <App />
    </>
);