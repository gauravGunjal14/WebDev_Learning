console.log("10");

// console.log("20");
// setTimeout(() => {
//     console.log("20");
// }, 2000);

const timer = Date.now();
while (Date.now() - timer < 2000) {
    // waiting for 2 seconds
}

console.log("20");

console.log("30");