

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
