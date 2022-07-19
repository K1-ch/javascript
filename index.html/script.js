`use strict`
//javascript has dynamic typing
let var1=10;//first assignment
console.log(var1);

var1="Kiran";//second assignment
console.log(var1);

//whenever we declare an empty variable
// the value of the variable is undefined 
//and the type of the variable is also undefined
let first;
console.log(typeof first);//output=undefined
console.log(first);//output=undefined

//typeof null is an object
console.log(typeof null);//output=object

var1=20;
let var2=50;
console.log(var1-var2,var2);

//power operator **
console.log(2**5);//32 output
var m='hello';//output=hello
console.log(m);


const s1={
    firstname:'Kiran',
    lastname:'Chauhan',
    school:'Kiet college',
    marks:[10,20,30]
};

var interested=prompt('what do u know abt kiran firstname,lastname school,marks');

if(s1[interested]){
    console.log(s1[interested]);
}
else{
    console.log('wrong choice');
}