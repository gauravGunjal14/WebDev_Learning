import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../Slice1";

export default function FoodInCart({ item }) {

    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();

    function handleClick() {
        if (inCart) {
            dispatch(removeItems());
            setInCart(false);
        }
        else {
            dispatch(addItems());
            setInCart(true);
        }
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button onClick={handleClick}
                style={{ backgroundColor: "rgba(244, 121, 121, 1)", color: "white", padding: "10px", width: "100px", borderRadius: "6px" }}>{inCart ? "Remove" : "Add"}</button>
        </div>
    )
}