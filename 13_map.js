// this is the map function

let arr=[1,2,4,5,6];
let m=arr.map((Element)=>{
    console.log(Element)
    return Element+1
})
console.log(m) // [2, 3, 5, 6, 7]

let arr1=[22,34,4,3,2,33,,233,44]
let a=arr1.filter((e)=>{ return e<10

})
console.log(a) // [4, 3, 2]

