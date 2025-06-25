// reduce

let arr = [10,20,30];

const result = arr.reduce((acc, curr)=>{
    acc = acc + curr;
    return acc;
}, 0)

console.log(result);


let arr1 = ["orange", "apple", "greps", "apple", "greps", "orange", "apple", "orange",];
const result2 = arr1.reduce((acc, curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;
    return acc;
}, {});

console.log(result2);