const value2 = {
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
  "['Kiran','pooja','laxmi','rahul','babu👼']": "family",
};

/*---------converting objects to map-----------*/

const hours = new Map(Object.entries(value2.collegeTiming));
console.log(hours);
const question = new Map([
  ["que", "what is fav lang of yours"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", "javascript🎉"],
  [true, "correct"],
  [false, "incorrect"],
]);

//console.log(question);

/*-------destructing map-----*/

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}  : ${value}`);
}

// const answer = Number(prompt("Enter your number"));
// question.get(answer) === question.get("correct")
//   ? question.get(true)
//   : question.get(false);

/*---convert map to array back----*/

console.log(...question);
console.log(...question.keys());
console.log(...question.values());
