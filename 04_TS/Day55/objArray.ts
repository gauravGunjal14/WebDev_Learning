interface people {name: string, age: number;}

const arr:people[] = [
    {name: "John",age: 30,},
    {name: "Jane",age: 25,}
];

function greet(a:number = 5): void {
    console.log(a);
}

greet(10);

// optional parameter
function meet(name?:string): void {
    console.log(name || "No name provided");
}

meet("Alice");
meet();

// arrow function
const sum = (a: number, b: number): number => {
    return a + b;
}
console.log(sum(5, 10));

// callback function

type chill = (amount: number)=>void;

function placeOrder(order:number, callback: chill):void {
    const amount:number = order + 10;
    callback(amount);
}

placeOrder(100, (amount:number) => {
    console.log(amount);
});