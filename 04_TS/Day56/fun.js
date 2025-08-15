// rest parameter
function sum(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
sum(1, 2, 3, 4, 5);
