import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import Zero from "./src/Zero";
import Details from "./src/Details";
import Hii from "./src/Hii";
import Hello from "./src/Hello";
import Github from "./src/Github";

function Main() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/details">Details</Link>
                <Link to="/github">Github</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details" element={<Details />}>
                    <Route index element={<Zero />} />
                    <Route path="hii" element={<Hii />} />
                    <Route path="hello" element={<Hello />} />
                </Route>

                <Route path="/github/:name" element={<Github></Github>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);