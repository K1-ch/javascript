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
  subject(...arr) {
    const [x, , y, ...others] = arr;
    return [x, y, others];
  },
};
const properties = Object.keys(value2); //it will print all the key values
console.log(properties);
const propInside = Object.keys(value2.collegeTiming); //it will print the keys of collegeTiming obj
console.log(propInside);

let Open = `we are open on ${propInside.length} days`;

/*-------------Object.values--------------*/

const val1 = Object.values(value2.collegeTiming);
console.log(val1);

/*-----combination of both keys and value ---------*/

for (const print of propInside) {
  Open += ` ${print},`;
}

console.log(Open);

/*-------use of entries for destructring------------*/

const entries = Object.entries(value2.collegeTiming);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
