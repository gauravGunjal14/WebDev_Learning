let menu = document.getElementById("menu");
let close = document.getElementById("close")

var tl = gsap.timeline();

tl.to(".links", {
    right: 0,
    duration: 0.6,
})

tl.from(".nav-links", {
    x:150,
    duration: 0.6,
    stagger: 0.28,
    opacity: 0,
})

tl.from("#close", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", ()=>{
    tl.play();

})

close.addEventListener("click", ()=>{
    tl.reverse();
})