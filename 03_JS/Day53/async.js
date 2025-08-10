function test1() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello1");
        }, 5000);
    });
    return p1;
}

function test2() {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello2");
        }, 5000);
    });
    return p2;
}

async function greet() {

    
    // const data1 = await test1();
    // console.log(data1);

    // const data2 = await test2();
    // console.log(data2);
    const data1 = await Promise.all([test1(), test2()]);
    console.log(data1);
}

greet();

console.log("hello3");
console.log("hello4");