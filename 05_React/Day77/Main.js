import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import Card from "./src/Card";
import {Provider} from "react-redux";
import store from "./Store";

function Main() {
    return (
        <Provider store={store}>
            <Header />
            <Card />
        </Provider>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Main />);