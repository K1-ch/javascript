"use strict";
/*4 types to call a function 1).Method(Inside object) 2). Simple fun call
3).Arrow fun call  4). Event Listener  */

//the global use of this will refer to the window object
//1).use of this globally
console.log(this);

//1.0).Methods(this) inside object can refer to the properties of the object
// simply logging inside this will refer to the all the  properties
const value1 = {
  a: 2022,
  name: "Kiran",
  print: function () {
    console.log(this);
    console.log(this.name + "chauhan"); //can refer to all the other properties of the objects
  },
};
value1.print();

/*------------another object----------*/
const value2 = {
  name: "pooja",
};

/*--here we coy the print method of value1 to value2----*/
value2.print = value1.print;

/*----calling the print function in value2 after copying-------*/
/*----this keyword always pointing the object which is calling the method hence the output is 
poojachauhan---------------*/
value2.print();

//2).inside regular/simple function the this keyword will refer to undefined
//it gets its own this keyword
//but inside any object this keyword will refer to all the obj  properties
function sum() {
  console.log(this);
}
sum();

const sum1 = function () {
  console.log(this);
};
sum1();

//3).Arrow function do not get their own this keyword they refer to their closet non arrow parent function

const print = (string) => {
  const ans = `hello my name is ${string}`;
  console.log(ans);
  console.log(this); //window object
};
print("Kiran");

/*-------now passing the value2's method of print  to a new constant value because
it is also a constant--------*/

const value3 = value2.print;
console.log(value3);
//calling the value3 function
value3(); //this is undefined because it is now a regular function and it does not have any owner like 2).
