/*-------Set operator is used to remove duplicates from an Iterable Objects -------*/

const noDuplicate = new Set([
  "Kiran",
  "Pooja",
  "Kiran",
  "Pooja",
  "Rahul",
  "Kiran",
  "Pooja",
  "Laxmi",
]);

console.log(noDuplicate);

console.log(new Set("Kiran")); //Strings are also iterable objects

/*----It can also be empty----*/

console.log(new Set());

console.log(noDuplicate.size);
noDuplicate.add("Mahima");
noDuplicate.add("Sapna");
console.log(noDuplicate);
noDuplicate.delete("Kiran");

console.log(noDuplicate);

/*--------------Using of Sets in Printing------*/

for (const noDupl of noDuplicate) console.log(noDupl);
console.log(noDuplicate.size);
