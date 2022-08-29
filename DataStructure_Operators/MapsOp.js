/*-----Map is a data structure which maps keys to values it returns the key value pairs-----*/
/*-----set and get methods are used in this map------*/

const value1 = new Map();
console.log(value1.set("firstname", "Kiran"));
console.log(value1.set("lastname", "Chauhan"));

/*---using map we can also create boolean as a key---*/
value1
  .set("college", "Kiet") //first key then value
  .set(5, "['Math','Science','English','Hindi']")
  .set(500, "[160,100,120,140]")
  .set(11, "open")
  .set(true, "We will open")
  .set(false, "We Will Close");

const resKeys = value1.keys();

for (const val of resKeys) {
  console.log(value1.get(val));
}

console.log(value1.get(5));
console.log(value1.get(500));
console.log(value1.get(true));
