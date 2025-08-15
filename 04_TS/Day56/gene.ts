// geneic template

// function greet(a:(number | string | number[] | boolean)):(number | string | number[] | boolean) {
function greet<T>(a: T): T {
    return a;
}

console.log(greet(10));
console.log(greet("Hello"));
console.log(greet([1, 2, 3]));
console.log(greet(true));


interface admin<T, Y> {
    name: string;
    age: number;
    salary: T;
    aadhar: Y;
}

const obj4: admin<string,number> = {
    name: "Ravi",
    age: 30,
    salary: "50000",
    aadhar: 123456789012
}

const obj5: admin<number,string> = {
    name: "Raju",
    age: 30,
    salary: 50000,
    aadhar: "123456789012"
}