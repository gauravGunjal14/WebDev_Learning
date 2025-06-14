// Non primitive data type

// arry
let arr = [10, 20 , 30];
console.log(arr)

// object
let obj ={
    user: "Gaurav",
    uid: 101,
    gid: 1001,
}

// function assigned to vari.
let fun = function(){
    console.log("Hello world");
    return 10;
}

console.log(fun())

// string to number
let account_balance = "100"
let num = Number(account_balance)
console.log(typeof num)

//invalid string to number
let a = "100bw"
console.log(Number(a))

// boolean to number
let sta = true;
console.log(Number(sta))

//null to number
let b=null;
console.log(Number(b))

// undefined to number
let c = undefined
console.log(Number(c))

//number to string
let d = 20
console.log(String(d))

//boolean to string
let e = true
console.log(String(e))

// string to boolean
let f="abc"
console.log(Boolean(f)) //true

let g = ""
console.log(Boolean(g)) //false