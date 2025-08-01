// Callback function
function fetchuser(Callback){
    console.log("Fetching the user Detail...");
    setTimeout(() => {
        console.log("Data fetched succesfully");
        const name = "Gaurav";
        // suppose fetched data from backend
        // greet(name);
        Callback(name);
    }, 2000)
}

function greet(name){
    console.log(`Hello, ${name}!`);
}

function meet(name){
    console.log(`Hello ${name}, I will meet you in mumbai`)
}
fetchuser(greet);