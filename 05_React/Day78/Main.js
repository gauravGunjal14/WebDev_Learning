import React from "react";
import ReactDom from "react-dom/client";
import {Provider} from "react-redux";
import store from "./Store";
import CoinCreate from "./src/CoinCreate";

function Main() {
    return (
        <Provider store={store}>
            <CoinCreate />
        </Provider>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Main />);