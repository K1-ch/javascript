let arr = [10, 100, 120, 167, 1009, 1716, 1617, 654, 191];
for (const x of arr) console.log(x);

/*---if we want to access the loops with its entries index---*/

for (const y of arr.entries()) console.log(y);

console.log([...arr.entries()]);

/*----destrcuting using entries---*/

for (const [index, ele] of arr.entries()) {
  console.log(`${index + 1}:${ele}`);
}
