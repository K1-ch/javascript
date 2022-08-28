/*-- problem with logical operator in objects---- */
/*--here it is may be possible that the Student get 0 marks but 0 is a falsy value
hence the marks value is assigned to 10 this leads to wrong information-----*/
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

const marks = value.marks ? value.marks : 10;
console.log(marks); //output 10

/*-----Nullish Coalescing Operator ??----*/
/*----it only takes null and undefiuned value---*/

const marks1 = value.marks ?? 10;
console.log(marks1); //output 0
