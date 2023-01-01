// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

const first = function firstElement(arr, n){
    if (n > 0) {
        return arr.slice(0, n);
    } else if (n <= 0) {
        return [];
    }
    else {
        return arr.slice(0, 1);
    }
}


console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));