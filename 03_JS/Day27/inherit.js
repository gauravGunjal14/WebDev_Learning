// inherit
let user1={
    name:"gaurav",
    age: 19
}

let user2={
    uid: 1108,
    department: "IT"
}

user2.__proto__=user1;
console.log(user2.name);