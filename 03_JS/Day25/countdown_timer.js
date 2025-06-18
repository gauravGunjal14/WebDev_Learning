// countdown timer for olampic 2028
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2-date1;
const days = Math.floor(date / (1000*60*60*24));
const hours = Math.floor((date/(1000*60*60)%24));
const min = Math.floor((date/(1000*60)%60));
const sec = Math.floor(date/(1000%60));

console.log(`olampic countdown timer: Days: ${days} hours: ${hours} min: ${min} sec: ${sec}`)