// this is the arrow function,Arrow functions were introduced in ES6.
// we can write function in the one line using the arrow function

const greet = (element) => {
    console.log("Hello!",element);
};
greet("class")

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


// this is the simple Arrow funcion syntax 
const Demo=((i)=>{console.log(`${i}`)});

Demo("Akash")