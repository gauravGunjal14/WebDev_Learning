import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomCounter } from "../Slicer1";

export default function CustomCounter() {

    const [cusCountInput, setCusCountInput] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = () => {
        const num = Number(cusCountInput);
        dispatch(CustomCounter(num));
        setCusCountInput("");
    };

    return (
        <div>
            <input
                type="number"
                value={cusCountInput}
                onChange={(e) => setCusCountInput(e.target.value)}
                placeholder="Set Custom Counter"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}