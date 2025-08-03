// callback hell example
function placeOreder(callback){
    console.log("Talking with the waiter");

    setTimeout(()=>{
        console.log("Order Placed succesfully");
        callback();
    }, 2000)
}

function prepareOrder(callback){
    console.log("Pizza preparation started");

    setTimeout(()=>{
        console.log("Pizza is ready");
        callback();
    }, 5000)
}

function pickupOrder(callback){
    console.log("Ready to pickup the order");

    setTimeout(()=>{
        console.log("picked up the order by delivery boy");
        callback();
    }, 3000)
}

function deliverOrder(callback){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
        callback();
    }, 5000)
}

// placeOreder();
// prepareOrder();
// pickupOrder();
// deliverOrder();

// placeOreder(prepareOrder);

placeOreder(()=>{
    prepareOrder(()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
                console.log("All done");
            });
        });
    });
})