// this is the javascript

let flag=2;

function controller(x){
    flag=flag+x;
    show(flag);
}
function show(num){
   let slides=document.getElementsByClassName('slid');
   for(let y of slides){
    y.style.display="none";
   }
   console.log(num)
//    slides[num].style.display= "block";
slides[num].style.display="block";

}
show(flag)