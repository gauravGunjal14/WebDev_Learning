// nested object

let user = {
    name: "gaurav",
    age: 19,
    address: {
        pincode: 301220,
        city: "mumbai"
    },
    greet: function(){
        console.log("Hello everyone")
    }
}

// let {name, age} = user;
// console.log(name);

let {address:{pincode}} = user;
console.log(pincode);

user.greet();