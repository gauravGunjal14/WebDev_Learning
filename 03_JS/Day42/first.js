const form = document.querySelector("form");

// form.addEventListener("input", (event) => {
//     console.log(event.target.value);

// form.addEventListener("change", (event) => {
//     console.log(event.target.value);

// form.addEventListener("focusin", (event) => {
//     console.log(event.target.value);

// form.addEventListener("focusout", (event) => {
//     console.log(event.target.value);
// })

// form.addEventListener("dbclick", (event) => {
//     console.log(event.target.value);
// })

// form.addEventListener("submit", (event) => {
//     // console.log(event.target.value);
//     console.log("Form submitted");
// })

// form.addEventListener('reset', (event) => {
//     // console.log(event.target.value);
//     console.log("Form reset");
// })

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("last");
    // console.log(second.value);

    // const age = document.getElementById("age");
    // console.log(age.value);

    const data = new FormData(form);
    // console.log(data);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    // for(let key of data.keys()) {
    //     console.log(key);
    // }

    for(let key of data.entries()){
        console.log(key);
    }

    // const result = document.getElementById("result");
    // result.innerText = `${first.value} ${second.value} is ${age.value} years old.`;

    // document.body.append(result);
});
