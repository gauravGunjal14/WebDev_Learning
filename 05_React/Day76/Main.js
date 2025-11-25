import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./Stores";
import CustomCounter from "./src/CustomCounter";


function Main() {
    return (
    <Provider store={store}>
        <App />
        <br />
        <br />
        <CustomCounter />
    </Provider>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Main />);