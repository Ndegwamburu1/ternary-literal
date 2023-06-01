//function:defines a code once and uses the same code whenever the function is callled
//functions have access to global variables
//global variables are variables that is declared outiside of a function or any set of curly_braces
//return:returns a value back to thhe place where we invokred the function;
let area;
let width;
let height;

width=window.prompt("enter your width");
height=window.prompt("enter your height");

area =getArea(width*height);
console.log(typeof area);
console.log("the area is :" ,area);

function getArea(width,height){

 

    return width*height;
}

//ternary operator 
//condition ? expiftrue: expifFalse:
let age= 12;
 age<=18 ? console.log("under age"):console.log("adult");

 //template literals(defined (`))
 //used instead of single or double quotes
//used with $

let labl=window.prompt("enter your name");
let school=window.prompt("enter you schoo");
let text=`hello ${labl} you're ${age} old and your school is ${school}`
console.log(text);