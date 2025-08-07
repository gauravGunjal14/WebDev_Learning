const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=1a5a3938cc9a4c22ba9144647250508&q=London&aqi=yes`)

// Promises.then((responce)=>{
//     return responce.json()
// }).then((data)=>{
//     console.log(data)
// })

// Promises
// .then(responce=>responce.json())
// .then(data=>console.log(data))

fetch(`http://api.weatherapi.com/v1/current.json?key=1a5a3938cc9a4c22ba9144647250508&q=Mumbai&aqi=yes`)
.then(responce=>responce.json())
.then(data=>console.log(data.current.temp_c))
.catch((error)=>console.log(error));