//05. Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];

const arrToStr = function myColor (arr) {
    return arr.join('+');
}

console.log(arrToStr(["Red", "Green", "White", "Black"]))



/*Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */