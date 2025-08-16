const root = document.getElementById("root");

// const header1 = document.createElement("h1");
// header1.textContent = "Hello World";
// header1.style.color = "blue";
// header1.style.background = "yellow";
// header1.style.fontSize = "30px";

// const header2 = document.createElement("h2");
// header2.textContent = "hii";
// header2.style.color = "white";
// header2.style.background = "black";
// header2.style.fontSize = "25px";

// root.appendChild(header1);
// root.appendChild(header2);

const React = {
    createElement: function createElement(type, style, content) {
        const element = document.createElement(type);

        for (const key in style) {
            element.style[key] = style[key];
        }

        element.textContent = content;
    }
}

const header1 = React.createElement("h1", {color: "blue", background: "yellow", fontSize: "30px"}, "Hello World");
const header2 = React.createElement("h2", {color: "white", background: "black", fontSize: "25px"}, "Hii");

const ReactDom = {
    render: function render(element){
        root.appendChild(element);
    }
}

ReactDom.render(header1);
ReactDom.render(header2);