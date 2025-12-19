function breakTheText(){

let h1 = document.querySelector("h1");

let text = h1.textContent;

let splittedText = text.split("");
let halfLength = Math.floor(text.length / 2);

let clustter = "";

splittedText.forEach((elem, idx) => {
    if (idx < halfLength) {
        clustter += `<span class="a">${elem}</span>`
    }
    else {
        clustter += `<span class="b">${elem}</span>`
    }
})

h1.innerHTML = clustter;

}

breakTheText();


gsap.from("h1 .a", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
})

gsap.from("h1 .b", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
})