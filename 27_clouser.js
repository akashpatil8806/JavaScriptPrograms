// The clouser is the an innner function there are acess to the outer function variable.

let fun=function(){
    console.log("hii i am outer...");

    function inner(){
        console.log("i am inner function....");
    }
    return inner
}
let inner=fun()
inner()
console.log(inner)