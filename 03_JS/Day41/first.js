const form = document.querySelector("form");

// form.addEventListener("input", (event) => {
//     console.log(event.target.value);

// form.addEventListener("change", (event) => {
//     console.log(event.target.value);

// form.addEventListener("focusin", (event) => {
//     console.log(event.target.value);

form.addEventListener("focusout", (event) => {
    console.log(event.target.value);
})