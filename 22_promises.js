// this is the promise in javascript it can handled the asynchronus oprations 


let promises=new Promise((reslove,rject)=>{
    setTimeout(()=>{
        console.log("this is pormise");

    },2000); // this is block run after the 2 second
    let isnotesprepared=true;
    if(isnotesprepared){
        reslove("Students notes are ready");
    }
    else{
        rject("students notes are not ready")
    }
});

promises.then((message)=>{
 console.log(message);
}).catch((message)=>{
    console.log(message)
});