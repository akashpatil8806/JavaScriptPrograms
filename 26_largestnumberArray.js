function findLargest(arr) {
    let max = arr[0]; // Assume first element is the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

let numbers = [10, 25, 87, 45, 99, 3];
console.log(findLargest(numbers)); // Output: 99
