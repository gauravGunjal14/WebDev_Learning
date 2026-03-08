const add = require("./second");

// this requires, run second.js file in IIFE (Immediately Invoked Function Expression) to avoid polluting the global scope.
// where we can't access the add function in second.js file, because it's not in the global scope. 
// and we can only access the add function if we run second.js file in the global scope.

// (function () {
//     console.log("This is the second file");

//     function add(a, b) {
//         return a + b;
//     }
// })();

add(5, 10);
console.log("This is the first file");