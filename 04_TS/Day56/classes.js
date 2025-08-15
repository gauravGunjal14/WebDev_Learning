// class person{
//     name: string;
//     age: number;
//     constructor(n1:string, n2:number) {
//         this.name = n1;
//         this.age = n2;
//     }
//     greet(): void {
//         console.log(`Hi ${this.name}`);
//     }
// }
// const obj1 = new person("John", 30);
// const obj2 = new person("Ramesh", 25);
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.name);
// obj1.greet();
class person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
class employee extends person {
    constructor(name, age, salary) {
        super(name, age); // Call the constructor of the parent class
        this.salary = salary;
    }
    greet() {
        console.log(`hii ${this.name}, age ${this.age}, salary ${this.salary}`);
    }
}
const obj3 = new employee("Gaurav", 19, 50000);
obj3.greet();
