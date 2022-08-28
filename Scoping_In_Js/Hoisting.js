"use strict";
/*Hoisting with variables-------------*/
console.log(a);

/*The value of var variable before initilization is undefine
The value of let/const variables before initilization is  in temporal dead zone(tdz) means cannot 
use before initilization*/

//console.log(b);//let variable cannot used before initilization.
//console.log(c);

var a = 20;
let b = 62;
const c = 56;

/* Hoisting with functions---------------*/

/*the only function that can be called before declaration is function declaration arrow/funExpression are 
itself as a variable so they can't be used before declarations*/

console.log(declaration(8, 8));

//console.log(funExpression(10, 10)); //Error:can't access funExpression before initilization because it is constant

/*if we use var as a variable with arrow/functionExp then the initial value of var before declaration is undefined
so it will set the function value as undefined hence we got an 
Error:arrowFunction is not an function*/

console.log(arrowFunction(9, 10)); //Error:arrowFunction is not an function

function declaration(a, b) {
  return a + b;
}

let funExpression = function (a, b) {
  return a + b;
};

var arrowFunction = (a, b) => a + b;
