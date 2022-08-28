"use strict";
/*---- three properties of logical operators
1).Can take any value
2).Can return any value
3).Sort-circuit  for && ||  -----*/

/*--- And operator works exactly opposite of OR operator ---*/

//can take argument of any type and its returning the integer value here '3' so 1). 2). satisfies
console.log(3 || 0);

/*---short circuit or OR OPERATOR will return the first truthy value from all the arguments----*/
console.log("-------for || operator------");
console.log("" || 0 || 20 || NaN); //return first value that is 20 here
console.log("" || 0 || undefined || 10 || NaN); //return first value that is 10 here
console.log("" || 0 || null || NaN || undefined || 200); //return first value that is 200 here

/*---short circuit for AND OPERATOR will return the first falsy value from all the arguments----*/
console.log("-------for && operator------");
console.log("Kiran" && 10 && 20 && NaN); //bcz first falsy value is NaN
console.log("Lion" && 0 && undefined && 10 && NaN); //bcz first falsy value is 0
console.log("people" && null && 0 && NaN && undefined && 200); //bcz first falsy value is null here

console.log("----------------------------------");

/*---short-circuit helps to set default values ----*/
const value = {
  firstname: "Kiran",
  lastname: "chauhan",
  college: "Kiet",
  birthYear: 1999,
  age: function (currentYear) {
    const res = currentYear - this.birthYear;
    console.log(res);
  },
  marks: 0,
};
/*---------------- OR Operator in Objects----------*/
const add = value.address ? value.address : "Ghaziabad"; //set default value of address to gzd
console.log(add);

/*--- if the value of the object property is already set then use it already set value---*/
const lastname = value.lastname ? value.lastname : "Kumar"; //here is already set so it is lastname="chauhan"
console.log(lastname);

/*---------------- AND Operator in Objects----------*/
if (value.lastname) value.lastname = " Arora"; //if the property exists then only the operation will performed
console.log(value.lastname);

/*--if the property exists then only the operation will performed this can be done by &&----*/
value.age && value.age(2022);
value.firstname = value.firstname && "pooja"; //to mutate individual value use()
console.log(value.firstname);
