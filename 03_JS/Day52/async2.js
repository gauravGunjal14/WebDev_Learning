function test1() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello1");
        }, 5000);
    });
    return p1;
}

function test2() {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello2");
        }, 5000);
    });
    return p2;
}

// console.log(p1);

// method 1
// p1.then(value=>console.log(value));
// p2.then(value=>console.log(value));

// method 2
async function greet() {
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}

greet();