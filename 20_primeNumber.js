// this is the prime number
let num=17;
var isPrime=false;
for(let i=2;i<11;i++){
    if(num%i==0){
        isPrime=false;
        console.log(`is not prime number`);
        break;
    }
}
if(isPrime){
    console.log("the number is prime ")
}
else{
    console.log("this is not prime ")
}