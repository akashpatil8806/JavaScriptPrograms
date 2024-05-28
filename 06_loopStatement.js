// // In looping there are the 

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// this is simple for loop "I want to print the 0 to 10 digit"

for(let i=0;i<=10;i++){
    console.log(i)
}


// this is the new one program
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for(let i=0;i<cars.length;i++){
    const item=cars[i]
    console.log(item)
}
//o/p
// BMW
// Volvo
// Saab
// Ford

console.log("--------------------------------------------------------")

// In this program we using the "for in"
let fruits=["mango","apple","cherry","banana"]

for(let i in fruits){
    const f=fruits[i]
    console.log("Name of the all fruits")
    console.log(f)
}

console.log("--------------------------------------------------------")
// this is also for loop in javascript we using the "for of"
 let names=["akash","sanket","vishal","shubham"]

 for(let i of names){
    
    console.log("all names in the array:"+i)
   
 }



