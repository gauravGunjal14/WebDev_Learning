const element = React.createElement("h1", {
    id: "first", className: "header", style: {
        backgroundColor: "blue",
        color: "white",
    }
}, "Hello World!");

const element2 = React.createElement("h2", {
    id: "first", className: "header", style: {
        backgroundColor: "blue",
        color: "white",
    }
}, "Hii");

const div1 = React.createElement("div", { id: "div1" }, [element, element2]);

// ReactDOM.render(element, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);