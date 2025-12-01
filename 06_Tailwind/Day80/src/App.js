import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1 className="bg-red-100 text-gray-500 border border-sky-500 p-4 m-4">
                Hello world!
            </h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);