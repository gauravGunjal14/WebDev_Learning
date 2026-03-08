let main = document.getElementById("main");
let cursor = document.getElementById("cursor");

main.addEventListener("mousemove", (event)=>{
    gsap.to(cursor, {
        x: event.x-5,
        y: event.y-2,
        duration: 0.8,
        ease: "back.out(1)",
    })
})