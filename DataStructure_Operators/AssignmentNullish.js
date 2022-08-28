const value1 = {
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

const value2 = {
  firstname: "Pooja",
  lastname: "Kumari",
  college: "IIt",
  birthYear: 2000,
  age: function (currentYear) {
    const res = currentYear - this.birthYear;
    console.log(res);
  },
  marks: 0,
};

value1.address ??= "Gzd";
console.log(value1);

value2.lastname &&= "Chauhan";
console.log(value2.lastname);
