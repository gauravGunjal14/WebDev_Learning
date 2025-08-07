const city = document.querySelector("#city");
const btn = document.querySelector("#search");
const result = document.querySelector("#result");
const para = document.querySelector("#para")

result.appendChild(para);

btn.addEventListener("click", (event)=>{
    event.preventDefault();

    const cityName = city.value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=1a5a3938cc9a4c22ba9144647250508&q=${cityName}&aqi=yes`)
    .then(response=> response.json())
    .then(data=>{
        para.innerHTML = `The temperature in ${cityName} is ${data.current.temp_c}°C`;
    })
    .catch((error)=>{
        console.log("Error fetching data:", error);
    });
})