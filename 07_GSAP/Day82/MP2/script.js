let path = "M 20 150 Q 750 150 1490 150";
let finalPath = "M 20 150 Q 750 150 1490 150";

const string = document.getElementById("string");

string.addEventListener("mousemove", (dets)=>{
    const svg = document.querySelector("svg");
    const rect = svg.getBoundingClientRect();
    const x = dets.clientX - rect.left;
    const y = dets.clientY - rect.top;
    path = `M 20 150 Q ${x} ${y} 1490 150`;

    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    })
});

string.addEventListener("mouseleave", ()=>{
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
});