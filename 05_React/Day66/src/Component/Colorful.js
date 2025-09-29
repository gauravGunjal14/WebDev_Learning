import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function Colorful() {
    const [color, setColor] = useState("#ffe9e9");

    console.log("render");

    useEffect(() => {
        console.log("UseEffect Executed");
        document.body.style.backgroundColor = color;
    }, [color]);

    console.log("second");

    return (
        <div className="container">
            <h1>Background Color Chnager</h1>
            <div className="btns">
                <button className="red" onClick={() => setColor("#ff0000")}>RED</button>
                <button className="blue" onClick={() => setColor("#0700c4")}>BLUE</button>
                <button className="green" onClick={() => setColor("#08aa00")}>GREEN</button>
                <button className="black" onClick={() => setColor("#000000")}>BLACK</button>
                <button className="white" onClick={() => setColor("#ffffff")}>WHITE</button>
            </div>
        </div>
    );
}

export default React.memo(Colorful);