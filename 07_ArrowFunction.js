// this is the arrow function,Arrow functions were introduced in ES6.
// we can write function in the one line using the arrow function

const greet = () => {
    console.log("Hello!");
};
greet()

// we pass the arguments
let fun=(a,b)=>a+b;
console.log(fun(1,8))
// o/p
9

let hello=(val)=>"hii am "+val;
console.log(hello("akash"))


///

let multi=(a,b)=>{
    
     return a*b
}

console.log(multi(2,7))