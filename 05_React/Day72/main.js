import React from "react";
import ReactDOM from "react-dom/client"
import App from "./src/App"

function Main(){
    return(
        <App></App>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>)