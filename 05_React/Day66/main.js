import React from "react";
import ReactDOM from "react-dom/client";

function Main() {
    function red(){
        let [red, setRed] = ba
    }
    return(
        <div className="container">
            <button className="red" onClick={red()}>RED</button>
            <button className="blue">BLUE</button>
            <button className="green">GREEN</button>
            <button className="black">BLACK</button>
            <button className="white">WHITE</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);