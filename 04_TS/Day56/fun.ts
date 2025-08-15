// rest parameter

function sum(...arr: number[]): void {
    let ans: number = 0;
    arr.forEach((val: number) => ans = ans + val);
    console.log(ans);
}

sum(1, 2, 3, 4, 5);