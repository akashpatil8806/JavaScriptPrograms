// This is the normal function
function add(a, b) {
  let result = a + b;
  console.log("the addition of the two number", result);
}
add(2, 3); //5

// this is currying function
function add(a) {
  return function (b) {
    return a + b;
  };
}

let result = add(2)(8); // 10
console.log(result);
