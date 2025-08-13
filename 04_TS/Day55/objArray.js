"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [
    { name: "John", age: 30, },
    { name: "Jane", age: 25, }
];
function greet(a = 5) {
    console.log(a);
}
greet(10);
// optional parameter
function meet(name) {
    console.log(name || "No name provided");
}
meet("Alice");
meet();
// arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 10));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(100, (amount) => {
    console.log(amount);
});
//# sourceMappingURL=objArray.js.map