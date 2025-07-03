document.body.addEventListener("click", (event)=>{
    const circle = document.createElement("div");
    circle.className = "circle";

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;

    const baground = ["red", "blue", "green", "yellow", "purple", "orange", "black"];
    circle.style.backgroundColor = baground[Math.floor(Math.random()*baground.length)];
    
    const mssg = ["hiii", "hello", "welcome", "heyy", "greetings"];
    circle.textContent = mssg[Math.floor(Math.random()*mssg.length)];
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000)
})