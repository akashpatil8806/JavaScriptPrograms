// array collection of same datatype element

const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"

fruits.push("Elderberry");
console.log(fruits); 

const lastFruit = fruits.pop();
console.log(lastFruit); // "Elderberry"
console.log(fruits);

const cars = ["BMW", "Volvo", "pikup", "Ford"];
for(let i=0;i<cars.length;i++){
    const item=cars[i]
    console.log(item)
}




