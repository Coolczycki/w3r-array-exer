//06. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

/* Resolution 1 - not working with zero in the front.
const dash = function dashIns(numb) {
    let toArr = Array.from(String(numb), element => Number(element));
    console.log(toArr);

    let res = '';

    for (let i = 0; i < toArr.length; i++) {
            if (toArr[i - 1] % 2 == 0 && toArr[i] % 2 == 0) {
               res += '-' +  toArr[i];
            } else {
                res += toArr[i];
            }
        }
    
    return res;
} */

const dash = function dashIns(numb) {
    const str = numb.toString();
    let result = [str[0]];

    for (let i = 0; i < str.length; i++) {
        if(str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
            result.push('-', str[i]);
        } else {
            result.push(str[i]);
        }
        console.log(result);
    }
    console.log(result);
    result = result.join('');
    return result;
}




console.log(dash(0124864333));