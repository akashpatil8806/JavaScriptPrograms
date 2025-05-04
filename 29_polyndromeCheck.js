
function poly(str){
    const rev=str.split("").reverse().join("")
    return str===rev
}
console.log(poly("tat"));