"use strict";
/*--- the rest operator helps in destructring an array it
 works simliary as spread operator the only diff is it will take the individual 
elements to individual arrays and copy the rest of ele into one variable.
It works on both L.H.S and R.H.S. 
The rest element should be the last element 
There should be only one rest element----------*/

const order = [
  "pizza",
  "burger",
  "pasta",
  "french-fries",
  "chilli-potatao",
  "manchurian",
  "egg-roll",
  "veg-roll",
];

/*----destructering the array-----*/

const [a, , b, ...others] = order; //l.h.s
console.log(a, b, others);

const [, a1, , b1, ...others1] = order; //r.h.s
console.log(a1, b1, others1);

/* ----rest operator helping in destructing objects inside objects----*/
const hospital = {
  hname: "yashoda",
  timings: {
    mon: {
      open: "9 a.m.",
      close: "10 p.m",
    },
    tue: {
      open: "9 a.m.",
      close: "10 p.m",
    },
    wed: {
      open: "9 a.m.",
      close: "10 p.m",
    },
    thu: {
      open: "9 a.m.",
      close: "10 p.m",
    },
  },
  patient: function (patient1, ...restPatients) {
    console.log(patient1, restPatients);
  },
};
const { thu, ...weekdays } = hospital.timings;
console.log(thu, weekdays);

/*---rest parameters----*/
const add = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];
  return sum;
};

console.log(add(4, 7, 9, 0));
console.log(add(6, 1));
console.log(add(2, 9, 12, 8, 1, 10, 14, 100));
/*--passing array values to rest parameters---*/
const x = [2, 9, 0, -1];
console.log(add(...x)); //passing array as rest parameter to add function

/*---rest arguments used in calling functions---*/
hospital.patient(
  "Modi",
  "Rohan",
  "Gayatri",
  "Anita",
  "Pikachu",
  "Beedu",
  "Mahesh"
);
