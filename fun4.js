//== && === operator


//does type coersion and then check while=== strictly check without converting

let age='10';
//if age=10 both lines will print and if age='10' only first line will execute
if(age==10)console.log("you are a child");//string is equal to string
if(age===10)console.log('are u a child?');//string is nt equal to number

let age1=false;
//only first line will execute because 0 is always a falsy value
if(age1==0)console.log("i  am nt a child");//type cohersion first then age1=false (false==false) and it becomes equal
if(age1===0)console.log('are u nt  a child?');//(false===0)

//another example
console.log('5',5)//white is string and yelloe is number
console.log(10 *'5');//this automatically coehrse String 5 to 5