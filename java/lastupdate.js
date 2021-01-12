

let daynames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
/*let hours=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];*/

let d = new Date(document.lastModified);
let time = d.toLocaleTimeString();
/*let hh = hours[d.getHours()];
let  m = d.getMinutes();
let  s = d.getSeconds();*/
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year= d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year + " " ;


document.getElementById("update").textContent = fulldate + "(   " + time + "  )";

