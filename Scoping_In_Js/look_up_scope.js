"use strict";

//the function print  will lookup for the variables firstName and age it gets both values in its upper scope
//that is Kiran Chauhan and 23 if firstName is nt present in calcAge then it will search
//these var in its higher scope that is global scope here

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  const firstName = "Kiran Chauhan";

  function print() {
    const info = `Hello I'm ${firstName} and i am ${age} years old`;
    console.log(info);
  }
  print();

  return age;
}

const firstName = "kiran";
console.log(calcAge(1999));
