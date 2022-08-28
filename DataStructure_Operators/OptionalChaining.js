/*---Optional Chaining checks does a specifie value exists or not--*/

/*---Optional Chaining On objects------*/
const value2 = {
  firstname1: "Kittu",
  lastname1: "Chauhan",
  collge: "Kiet",
  collegeTiming: {
    mon: {
      open: "10 a.m.",
      close: "5 p.m",
    },
    wed: {
      open: "11 a.m.",
      close: "4 p.m",
    },
    fri: {
      open: "0 a.m.",
      close: "12 p.m",
    },
    sat: {
      open: "11 a.m.",
      close: "4 p.m",
    },
  },
  address() {
    console.log("Gzd");
  },
};
/*---Way 1 to check if the college is open on tue or nt-----*/
if (value2.collegeTiming.tue) console.log(value2.collegeTiming.tue.open);
if (value2.collegeTiming.sat) console.log(value2.collegeTiming.sat.open);

/*---Way 2 to check if the college is open on tue or nt-----*/
console.log(value2.collegeTiming.tue && value2.collegeTiming.tue.open); //returns undefined if does not open
console.log(value2.collegeTiming.sat && value2.collegeTiming.sat.open); //returns the opening timing

/*---Way 3(Optional Chaining) to check if the college is open on tue or nt-----*/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const days of weekdays) {
  const info = value2.collegeTiming[days]?.open ?? "closed";
  if (info === "closed") console.log(`on ${days} we are closed`);
  else console.log(`on ${days} we open at ${info}`);
}

/*---Optional Chaining On methods------*/

// console.log(value2.address()?.() ?? `address not given yet`);
// console.log(value2.game()?.() ?? `address not given yet`);

/*---Optional Chaining On Arrays------*/
const user = [];
console.log(user.length > 0 ? user[0] : `user does not exist `);
const user1 = ["Pooja", "Rahul", "Laxmi", ""];
console.log(user1.length > 0 ? user1[0] : `user does not exist `);
