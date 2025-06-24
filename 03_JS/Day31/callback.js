function hello(fun){
    console.log("hello");
    fun();
}

function greet(){
    console.log("how are you?");
}

hello(greet);


// setInterval
function fetchData(){
    console.log("I am fetching data");
}
setInterval(fetchData, 5000);


// forEach
let arr = [10, 20, 30];
arr.forEach(function(num){
    console.log(num)
})


// filter
let arr1 = [10, 20, 30, 11];
let result = arr1.filter(function(num){
    return num%2==0;
})
console.log(result);

// map
let arr2 = [10, 20, 30, 11];
let result2 = arr1.filter((num)=> num%2==0).map((num) => num*num)
console.log(result2);