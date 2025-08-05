const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=1a5a3938cc9a4c22ba9144647250508&q=London&aqi=yes`)

// setTimeout(() => {
//     console.log(Promises)
// }, 2000)

// Promises.then((responce)=>{
//     console.log(responce);
// }).catch((error)=>{
//     console.log(error);
// })

Promises.then((responce)=>{
    const pro2 = responce.json()

    pro2.then((data)=>{
        console.log(data)
    })
})