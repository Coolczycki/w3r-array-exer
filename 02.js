// Write a JavaScript function to clone an array.

function cloneAnArray(...input){
    let first = input;
    let inputClone = input;
    return 'This is original array: ' + first + ' ' + 'and this is the clone: ' + inputClone;
    
}

console.log(cloneAnArray([1, 2, 4, 0]))
console.log(cloneAnArray([1, 2, [4, 0]]))