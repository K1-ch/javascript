//== && === operator

//does type coersion and then check while=== strictly check without converting

let age='10';
//if age=10 both lines will print and if age='10' only first line will execute
if(age==10)console.log("you are a child");
if(age===10)console.log('are u a child?');

let age1=false;
//only first line will execute because 0 is always a falsy value
if(age1==0)console.log("you are a child");
if(age1===0)console.log('are u a child?');

prompt("whats your fav number");