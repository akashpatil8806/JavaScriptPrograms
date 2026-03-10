// Remove the Duplicate number of the given array.

let arr = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique[unique.length] = arr[i];
  }
}

console.log(unique);
