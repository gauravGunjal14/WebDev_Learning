// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     redius: 50,
// })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
// })

let tl = gsap.timeline();

tl.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
})

tl.from("#box2", {
    x: 1000,
    duration: 2,
    rotate: 360,
    borderRadius: "50%",
})