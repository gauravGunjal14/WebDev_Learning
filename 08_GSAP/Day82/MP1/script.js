gsap.to("#page2 .scroll-text", {
    x: "-60%",
    scrollTrigger: {
        trigger: "#page2",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    }
})