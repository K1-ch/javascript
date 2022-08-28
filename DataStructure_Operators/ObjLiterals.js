/* ---Enchancements for Object Literals----*/

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//enchanced3 we can compute the values instead of writing it manually
const collegeTiming = {
  [weekdays[0]]: {
    open: "10 a.m.",
    close: "5 p.m",
  },
  [weekdays[4]]: {
    open: "11 a.m.",
    close: "4 p.m",
  },
  [`day-${2 + 4}`]: {
    open: "11 a.m.",
    close: "4 p.m",
  },
};
console.log(collegeTiming);
const value2 = {
  firstname1: "Kittu",
  lastname1: "Chauhan",
  collge: "Kiet",
  birthYear: 1999,
  //enchaced es6 feature1 to write a property used before for current obj
  collegeTiming,

  //enchanced feature2 related to methods

  age(curYear) {
    return curYear - this.birthYear;
  },
};

console.log(value2);
console.log(value2.age(2022));
