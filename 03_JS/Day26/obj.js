let obj = new Object;

// add
obj.name = "gaurav";
obj.age = 19;
console.log(obj);

//delete
delete obj.age;
console.log(obj);

//modify
obj.name = "harsh";
console.log(obj);

//method three
class person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let per1 = new person("gaurav", 19, "male");
let per2 = new person("harsh", 17, "male");
console.log(per1, per2)

//keys
let arr = Object.keys(obj);
console.log(arr)

//values
let arr1 = Object.values(obj);
console.log(arr1)

// keys and values
let arr2 = Object.entries(obj);
console.log(arr2)

let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}
let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

// or spred oprator
let obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)