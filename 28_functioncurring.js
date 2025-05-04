// the funcion curring in javascript Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add(5);  // First function call with 5
console.log(addTwo(4)); 