// geneic template
// function greet(a:(number | string | number[] | boolean)):(number | string | number[] | boolean) {
function greet(a) {
    return a;
}
console.log(greet(10));
console.log(greet("Hello"));
console.log(greet([1, 2, 3]));
console.log(greet(true));
