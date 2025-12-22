// // How to find the max and min value in given array in javascript

// let NumArray = [1, 2, 4, 2, 55, 330, 0, 44];

// // this Function show Max value
// const maxValue = (arr) => {
//   return arr.reduce((pre, cur) => (pre > cur ? pre : cur));
// };
// console.log("the max value of the given array is:", maxValue(NumArray));

// const minValue = (arr) => {
//   return arr.reduce((pre, cur) => (pre < cur ? pre : cur));
// };
// console.log("the min value of the given array is:", minValue(NumArray));
let NumArray = [1, 2, 4, 2, 55, 330, 0, 44];

let max = NumArray.reduce((pre, cur) => (pre < cur ? pre : cur));
console.log(max);
