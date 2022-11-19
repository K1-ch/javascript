// const s1 = {
//   firstname: "Kiran",
//   lastname: "Chauhan",
//   Age: "1999",
//   city: "Agra",
//   // calcAge: function(Age){
//   //     console.log(this);//this refers to whole object
//   //     return 2022-this.Age;
//   // }
//   calcAge: function (Age) {
//     this.AgeIs = 2021 - this.Age;
//   },
// };

// // console.log(s1.calcAge(1999));//using dot notation
// // console.log(s1['calcAge'](1999));//using bracket notation

// // //use of this
// // console.log(s1.calcAge());

// //this storing var
// console.log(s1.AgeIs);

const newVal2 = {
  name: "kiran",
  job: "teacher",
  college: "kiet",
  result: function () {
    const info = `Hello my name is ${this.name} i m a ${this.job} and my working place is ${this.college}`;
    return info;
  },
};

console.log(newVal2.result());
