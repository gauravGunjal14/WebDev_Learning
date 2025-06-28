// This keyword

let obj = {
    name: "Gaurav",
    age: 19,
    greet: function(){
        console.log(this.name)
    }
}

obj.greet();