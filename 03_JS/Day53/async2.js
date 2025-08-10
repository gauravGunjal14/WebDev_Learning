let cart = ["pizza", "burger", "pasta"];
function placeOreder(){
    console.log("Talking with the waiter");

    setTimeout(()=>{
        console.log("Order Placed succesfully");
    }, 2000)
}

function prepareOrder(){
    console.log("Pizza preparation started");

    setTimeout(()=>{
        console.log("Pizza is ready");
    }, 5000)
}

function pickupOrder(){
    console.log("Ready to pickup the order");

    setTimeout(()=>{
        console.log("picked up the order by delivery boy");
    }, 3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    }, 5000)
}

async function grret() {
    
    try{
        const order = await placeOreder(cart);
        const prepareOrder = await pickupOrder(order);
        const packOrder = await deliverOrder(prepareOrder);
        console.log("All done");
    }
    catch(error) {
        console.error("An error occurred:", error);
    }
}

grret();