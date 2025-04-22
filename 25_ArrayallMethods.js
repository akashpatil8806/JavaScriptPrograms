// All methods in array push() ,pop(),shift(),unshift(),
// slice(),splice(),map(),filter(),reduce(),forEach(),forin(),Forof(),indexOf()

let arr = ["mango", "banana", "coconut", ""];
console.log(arr);

// when we add any element array it add last
let newelementadd = arr.push("orange");
console.log(newelementadd);
console.log(arr);
// pop funcion are delete the last element from the array
arr.pop();
console.log(arr);

// the shift are used for delete element starting
arr.shift();
console.log(arr);

// unshift are used for the insert the element are first
arr.unshift("chikku");
arr.unshift("mosambi");
arr.unshift("peru");
arr.unshift("leman");
arr.unshift("graps");
arr.unshift("watermelon");
console.log(arr);

// slice are used for the get array element where to where you need
const newarra=arr.slice(1, 5);
console.log(newarra);

// splice The .splice() method is used to add, remove, or replace elements in an array. Unlike .slice(), it modifies the original array.


const splicearry=arr.splice(1,1,"rocky");
console.log(splicearry);


//Map() method in javascript 

const ArrayData=[1,2,3,4,5,6,7,8,9,10];

let sortdata=ArrayData.map((element)=>{
    const Selement=element*element;
    console.log(Selement);
})

// filter() method
 
const evennumber=ArrayData.filter((element)=>{
    
    if(element %2==0){
        console.log("the even element is",element)
    }
})

// reduce() method 