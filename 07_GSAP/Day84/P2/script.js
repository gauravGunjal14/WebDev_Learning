window.addEventListener("wheel", (e) => {

    if (e.deltaY > 0) {
        gsap.to(".marquee", {
            xPercent: 100,
            duration: 4,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".marquee svg", {
            rotate: 180,
        })
    }
     else {
        gsap.to(".marquee", {
            xPercent: 0,
            duration: 4,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".marquee svg", {
            rotate: 0,
        })
    }

});
