// // this is the prime number
// let num=19;
// var isPrime=false;
// for(let i=2;i<11;i++){
//     if(num%i==0){
//         isPrime=false;
//         console.log(`is  prime number`);
//         break;
//     }
// }
// if(isPrime){
//     console.log("the number is prime ")
// }
// else{
//     console.log("this is not prime ")
// }

function prime(n) {
  if (n < 2) 
    return `${n} is not prime number`;

    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return `${n} is not prime number`;
      }
    }
    return `${n} is prime number`;
  }
  

console.log(prime(10));
