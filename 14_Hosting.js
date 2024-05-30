// // In js the hosting is In JavaScript, "hoisting" is a behavior 
// where variable and function declarations are moved, or "hoisted," 
// to the top of their containing scope during the compilation phase.

// we are firstly print the any one statment

// console.log(str);// it give error 
 let str="it is javascript";
 console.log(str);

 // we also take one example using the function
// This allows you to call functions before they are defined in the code.
 Add()
  function Add(){
    let a=10
    let b=10
    let c=a+b;
    console.log(c);
  }
  //o/p:- 20

  //Let and Const Hoisting 
  console.log(x)//ReferenceError: Cannot access 'x' before initialization
  let x=10
  console.log(x)// o/p 10

  console.log(y)// ReferenceError: Cannot access 'y' before initialization
  const y=2