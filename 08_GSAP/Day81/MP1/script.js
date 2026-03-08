let tl = gsap.timeline();

tl.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
},);

tl.from(".menu-item", {
    duration: 0.5,
    y: -50,
    opacity: 0,
    stagger: 0.2,
},);

tl.from(".home", {
    duration: 1,
    y: 50,
    opacity: 0,
},);