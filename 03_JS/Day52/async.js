const p1 = new Promise(() => {
    setTimeout(() => {
        console.log("hello1");
    }, 8000);
});

const p2 = new Promise(() => {
    setTimeout(() => {
        console.log("hello2");
    }, 5000);
});
// console.log(p1);

// method 1
// p1.then(value=>console.log(value));
// p2.then(value=>console.log(value));

// method 2
async function greet() {
    const data1 = await p1;
    console.log(data1);

    const data2 = await p2;
    console.log(data2);
}

greet();