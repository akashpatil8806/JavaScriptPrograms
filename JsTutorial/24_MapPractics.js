// This is the Map function in the javascript

let map =new Map();
console.log(typeof(map));

map.set(11,"Roy")
map.set(22,"Disha")
map.set(33,"Ricky")
map.set(44,"Siya")
map.set(55,"Tom")

console.log(map);

// I Retrived the Particular data  from the array 

const Data=map.get(22);
console.log(Data);  // the out put give the disha


console.log("Traversing the Map using the key");

const keyOfMap=map.keys();
for(const key of keyOfMap){
    const value=map.get(key);
    console.log(`${key} ${value}`);
}


