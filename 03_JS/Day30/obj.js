let arr = [10,20,30]

// for of loop in object

for(let value of arr){
    console.log(value);
}


let obj = {
    name: "Gaurav",
    age: 19,
    gender: "male",
    city: "Mumbai"
}

// for of loop in object

for(let value of Object.keys(obj)){
    console.log(value);
}