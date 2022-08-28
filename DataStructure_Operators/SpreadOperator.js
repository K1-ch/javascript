"use strict";

let ar = [20, 10, 90, 87, 56, 45, 10];

let arr = [1, 5, ar[0], ar[1], ar[2], ar[3], ar[4], ar[5], ar[6]];

/*---to avoid this extra work we use spread opertor that is ' ... ' ---*/

let arr1 = ["pooja", "chauhan", ...ar];
console.log(arr1);

/*---advantage of spread operator---*/

//1).using to print array values individually

console.log(...ar);

//2).appending to the the already existing values
let arr2 = [...ar, "Kiran", "chauhan"];
console.log(arr2);

//3).//creating a shallow copy of an object(array is an object itself)
let arr3 = [...ar];

//4).merging to objects together
let finalArr = [...arr2, ...arr1];
console.log(finalArr);

//5).Iterables: Arrays,Strings,Maps,Sets And Objects

let str = "Kiran";
const letters = [...str, "S"]; //convert str into letter by letter
console.log(letters);
console.log(...str); //print letter by letter this is called iterable

//6)Printing values from prompt
// const ingredient = [
//   prompt("Enter first Ingredient"),
//   prompt("Enter second Ingredient"),
//   prompt("Enter third Ingredient"),
// ];

// console.log(...ingredient);

//7).used to copy objects

const obj1 = {
  firstname: "Kiran",
  lastname: "Chauhan",
  marks: [10, 20, 30],
};

const obj2 = {
  subjects: ["math", "science", "computer"],
  ...obj1, //copying one object to another using spread operator
};
/* ----by using spread op the copy objects modification will nt modify the previous obj values----*/
obj2.lastname = "Kumar";
console.log(obj1);
console.log(obj2);
