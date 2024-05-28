// //Date()
// Date(milliseconds)
// Date(dateString)
// Date(year, month, day, hours, minutes, seconds, milliseconds)

let D=Date()
console.log(D) // o/p Tue May 28 2024 22:29:19 GMT+0530 (India Standard Time)
console.log() 

let  date=new Date();  
let  day=date.getDate();  
let  month=date.getMonth()+1;  
let  year=date.getFullYear();  

console.log(date+' '+day+' '+month+' '+year)