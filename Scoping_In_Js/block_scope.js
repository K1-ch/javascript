"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  if (age >= 18) {
    var value = "This is not blocked scope";
    const info = `Oh! ${firstname} you are eligible to cast vote`;
    console.log(info);
    function sum(a, b) {
      return a + b;
    }
    console.log(sum(10, 20)); //with strict mode can only run from here
  }
  //console.log(info); this will create a block space error because const and let variables are blocked scope

  console.log(value); //this will execute even outside the if block because var is not blocked scope

  //console.log(sum(10, 20));
  //this will create an error because functions are also block scape bt only
  //with strict mode if we remove the 'use strict' mode then it will run without any error
  return age;
}

const firstname = "Kiran";
calcAge(1999);
