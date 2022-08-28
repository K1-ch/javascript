"use strict";
/*---------we can destructure objects by using curly braces and specifying the names because the order of 
elements does not matter in objects--------*/

const value1 = {
  firstname: "Kiran",
  lastname: "Chauhan",
  college: "Kiet",
  marks: [20, 40, 60],
};

const { firstname, marks } = value1;

console.log(firstname, marks);

/*----we can give different names to properties also by putting ':' and new name----*/
const { firstname: Studentname, marks: SubjectNumbers } = value1;

console.log(Studentname, SubjectNumbers);

/*---setting a default value for unknown obj properties----*/
/*--if we dont initialize unknown properties they will output undefined---*/
const { collegeYear: Year = [], marks: SubjectNumbers1 = [] } = value1;
console.log(Year, SubjectNumbers1);

/*---mutating the variables---*/
let a = 20,
  b = 34;
const obj = { a: 23, b: 31 };
({ a, b } = obj);
console.log(a, b);

/*--Nested objects Destructuring---*/
const value2 = {
  firstname1: "Kittu",
  lastname1: "Chauhan",
  collge: "Kiet",
  collegeTiming: {
    mon: {
      open: "10 a.m.",
      close: "5 p.m",
    },
    sat: {
      open: "11 a.m.",
      close: "4 p.m",
    },
  },
};

/*--Destrcuting the objects ----*/
// const { collegeTiming, firstname1, lastname1 } = value2;

// const { sat } = collegeTiming;
// console.log(sat);

/*--destructuring the nested objects---*/
const {
  sat: { open: o, close: c },
} = value2.collegeTiming;
console.log(o, c);

/*----destructing functions inside objects----*/

const values = {
  hotelName: "MenuPlaza",

  fun: function ({ customer = 1, itemNumber = 1, itemName = 1, address = 1 }) {
    return `The order of ${itemNumber} ${itemName} is made from ${this.hotelName} by ${customer} 
    it will be delivered to ${address} `;
  },
};

console.log(
  values.fun({
    customer: "Kiran",
    itemNumber: 4,
    itemName: "Pizza",
    address: "Ghaziabad",
  })
);
console.log(
  values.fun({
    customer: "Pooja",
    itemName: "Dosa",
    address: "Vasundhara",
  })
);
