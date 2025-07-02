const button = document.querySelector("button");

button.addEventListener("click", () => {

const input1 = document.getElementById("num1");
const num1 = Number(input1.value);

const input2 = document.getElementById("num2");
const num2 = Number(input2.value);

const result = document.getElementById("result");

if(isNaN(num1) || isNaN(num2)){
    return;
}
else{
let sum = num1 + num2;

result.innerText = `Result: ${sum}`;
}
})