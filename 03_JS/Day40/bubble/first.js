const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// event bubbling and event capturing

child.addEventListener("click", (event) => {
    console.log("child clicked");
    // console.log(event.target);
    // console.log(event.currentTarget);
    event.stopPropagation(); // stops the event from bubbling up to parent and grandParent
}, false);

parent.addEventListener("click", (event) => {
    console.log("parent clicked");
    // console.log(event.target);
    // console.log(event.currentTarget);
}, false);

grandParent.addEventListener("click", (event) => {
    console.log("grandParent clicked");
    // console.log(event.target);
    // console.log(event.currentTarget);
}, true);



// const root = document.getElementById("root");


// root.addEventListener("click", (event) => {
//     // console.log("root clicked");
//     console.log(event.target);
//     // console.log(event.currentTarget);
// }, false);