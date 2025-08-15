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
    name: string;
    // private age: number;
    // protected age: number;
    age: number;

    constructor(n1:string, n2:number){
        this.name = n1;
        this.age = n2;
    }
}

class employee extends person {
    salary: number;

    constructor(name: string, age:number, salary:number){
        super(name, age); // Call the constructor of the parent class
        this.salary = salary;
    }

    greet():void {
        console.log(`, age ${this.age}, salary ${this.salary}`);
        console.log(this.name);
    }
}
const obj3 = new employee("Gaurav", 19, 50000);
obj3.greet();
