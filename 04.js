// 4. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

const last = function lastArr(arr, n) {
    if (n > 0) {
        return arr.slice(-n);
    } else {
        return arr.slice(-1);
    }
}




console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
/* 
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2] 
*/