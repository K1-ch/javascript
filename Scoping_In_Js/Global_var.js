"use strict";

function calcAge(birthyear) {
  // console.log(lastname); //this will create a reference error bcz it is nowhere in the global execution space
  console.log(firstname);
  return 2022 - birthyear;
}
const firstname = "Kiran";

console.log(calcAge(1999));
