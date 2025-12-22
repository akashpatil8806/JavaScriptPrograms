// How to find the duplicate element in array in javascript

let arr = [1, 2, 3, 4, 1, 6, 4, 2];

let DupAarry = arr.filter((elm, idex, ar) => ar.indexOf(elm) !== idex);
console.log(DupAarry);
