// Write a JavaScript function to check whether an `input` is an array or not.

function inputCheck(args) {
    return Array.isArray(args);
}

console.log(inputCheck([1, 2, 3]));
console.log(inputCheck('y'))
console.log(inputCheck('y', 'e', 'a'))
console.log(inputCheck(['p', 'i', 'z', 'z', 'a']))