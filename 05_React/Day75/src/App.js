import React from "react";
import ReactDom from "react-dom/client";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "../Slicer1";

export default function App() {

    const count = useSelector((state) => state.slice1.count);
    const dispatch = useDispatch();

    return (
    <>
    <h1>Counter is {count}</h1>
    <button onClick={()=> dispatch(Increment())}>Increment</button>
    <button onClick={()=> dispatch(Decrement())}>Decrement</button>
    <button onClick={()=> dispatch(Reset())}>Reset</button>
    </>
    );
}