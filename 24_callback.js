//  firstly we are created the data
const datas = [
  { name: "akash", work: "student" },
  { name: "roy", work: "job" },
];

function getdata() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => { 
      output += `<li>${data.name}</li>`;
    });
     document.body.innerHTML=output;
    // console.log(output);
  }, 1000);
}
function createdata(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("kay tar gadbad ahe...");
      }

      getdata;
    }, 2000);
  });
}
// createdata({ name: "tom", work: "job" }).then(getdata).catch(err=console.log( err));

async function Demo() {
  await createdata({ name: "tom", work: "job" })
  .then(getdata)
  .catch((err)=>err)
  
    
  
  getdata();
}
Demo();
