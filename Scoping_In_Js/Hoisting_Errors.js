"use strict";
/* here we write a logic that the products are deleted if numProducts value is zero
and we use numProducts variable before declaration so the numproducts is assigned to undefined,
that is also a falsy values so the products get deleted even though we assign the numProducts Value to 10*/

if (!numProducts) deleteValues();
var numProducts = 10;
function deleteValues() {
  console.log("all products are deleted!");
}

/*window =global window objects of js in the browser */

let m = 10;
const n = 20;
var o = 30;

try {
  console.log(m === window.x); //false
  console.log(n === window.n); //false
  console.log(o === window.o); //true
} catch (Exception) {
  console.log("Error");
}
